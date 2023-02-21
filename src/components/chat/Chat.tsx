import { db } from '../../firebase/firebase';
import { addDoc, collection, doc, limit, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import Message from './Message';
import { AuthContext } from 'context/UserAuthContext';
import { ReactComponent as sendIcon } from 'images/send-icon.svg';
interface IMessage {
    text: string,
    time: any,
    userImage: string,
    userId: string
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
    // justify-content : space-between;
`

const MessageList = styled.div`
    // overflow-y: scroll;
    overflow: auto;
    flex : 1;
    background-color : #f5f5f5;
    padding : 0 8px;
`

function Chat() {
    // const [snapshot, loading, error] = useCollection(collection(db, 'messages'),);
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [text, setText] = useState<string>("")
    const { user } = useContext(AuthContext)
    // useEffect(() => {
    //     const q = query(collection(db, 'chats'), orderBy("time"));
    //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //         let messages: any = [];
    //         querySnapshot.forEach((doc) => {
    //             messages.push({ ...doc.data() });
    //             console.log(doc.data().time.toDate());
    //         });
    //         setMessages(messages)
    //     });
    //     return () => unsubscribe();

    // }, []);

    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy("time"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages: any = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data() });
            });
            setMessages(messages)
        });
        return () => unsubscribe();

    }, []);

    async function sendMessage() {
        if (text !== "" && text.trim().length > 0) {
            await addDoc(collection(db, "messages"), {
                text: text,
                time: new Date(),
                userId: user.uid,
                userImage: user.photoURL
            });
            setText("")
        } else {
            return
        }
    }

    return (
        <ChatWrapper>
            <MessageList>
                {
                    messages.map(message => <Message uid={message.userId} image={message.userImage} text={message.text} />)
                }
            </MessageList>

            <MessageWrapper>
                <MessageInput placeholder='Message here' type="text" value={text} onChange={event => setText(event.target.value)} />
                <SendBtn onClick={sendMessage}><span>→</span> </SendBtn>
            </MessageWrapper>
        </ChatWrapper>
    )
}

export default Chat