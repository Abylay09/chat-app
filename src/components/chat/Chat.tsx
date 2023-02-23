import {  db } from '../../firebase/firebase';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import Message from './Message';
import { AuthContext } from 'context/UserAuthContext';
import { ReactComponent as SendIcon } from 'images/send-icon.svg';

interface IMessage {
    text: string,
    time: any,
    userImage: string,
    userId: string,
    fullName: string
}

const MessageInput = styled.input`
    flex-grow : 1;
    height : 30px;
    border-radius : 12px;
    padding-left : 15px;
    font-size : 18px;
`
const MessageWrapper = styled.div`
    display : flex;
    gap : 10px;
    padding-bottom : 20px;

`
const SendBtn = styled.button`
    flex-basis : ${props => props.theme.size.sm};
    border : none;
    background-color : ${props => props.theme.colors.second};
    border-radius : 12px;
    font-size : 32px;
    line-height : 40px;
    font-weight : bold;
    display : flex; 
    align-items : center;
    justify-content:center;

    &:hover{
        color : white;
        cursor : pointer;
    }
`

const ChatWrapper = styled.div`
    height : 100%;
    display : flex;
    flex-direction : column;
`

const MessageList = styled.div`
    display : flex;
    flex-direction : column;
    gap : 32px;
    overflow: auto;
    flex : 1;
    background-color : #f5f5f5;
    padding : 0 8px;
`

function Chat() {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [text, setText] = useState<string>("")
    const { user } = useContext(AuthContext)
    const ref = useRef<any>();
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy("time"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages: any = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data() });
            });
            setMessages(messages)
        });

        setTimeout(() => {
            ref.current.scrollIntoView({ behavior: "smooth" })
        }, 1500);
        
        return () => unsubscribe();
    }, []);

    async function sendMessage() {
        if (text !== "" && text.trim().length > 0) {
            await addDoc(collection(db, "messages"), {
                fullName: user.displayName,
                text: text,
                time: new Date(),
                userId: user.uid,
                userImage: user.photoURL,
            });
            setText("")
            ref.current.scrollIntoView({ behavior: "smooth" })
        } else {
            return
        }
    }

    return (
        <ChatWrapper>
            <MessageList>
                {
                    messages.map(message => <Message fullName={message.fullName} time={message.time} uid={message.userId} image={message.userImage} text={message.text} />)
                }
                <span ref={ref}></span>
            </MessageList>

            <MessageWrapper>
                <MessageInput onKeyPress={(e) => e.key === "Enter" ? sendMessage() : ""} placeholder='Message here' type="text" value={text} onChange={event => setText(event.target.value)} />
                <SendBtn onClick={sendMessage} ><SendIcon width={24} height={24} /></SendBtn>
            </MessageWrapper>
        </ChatWrapper >
    )
}

export default Chat