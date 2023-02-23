import { AuthContext } from 'context/UserAuthContext'
import React, { useContext } from 'react'
import styled from 'styled-components'

interface IMessageProps {
  text: string,
  image: string,
  uid: string,
  time: any,
  fullName : string
}

const MessageWrapper = styled.div`
  // position : relative;
  // display : flex;
  // align-items :center;
  // gap : 12px;
  // margin-top : 12px;
`

const MessageData = styled.div<{ myMessage: boolean }>`
  position : relative;
  display : flex;
  align-items :flex-start;
  gap : 12px;
  flex-direction: ${props => props.myMessage ? "row-reverse" : "row"};

`
const MessageImage = styled.img`
  border-radius : 100%;
  heigh : 32px;
  width : 32px;
`
const MessageText = styled.p`
  font-size : 18px;
  text-align: right;
  margin : 0;
`

const MessageTime = styled.span<{ myMessage: boolean }>`
  font-size : 14px;
  font-weight : 500;
  position : absolute;
  bottom : -26px;
  ${props => props.myMessage ? "right : 0;" : "left : 0;"}
  
`

const MessageAuthor = styled.h3<{ myMessage: boolean }>`
  color : ${props => props.theme.colors.second};
  font-size : 16px;
  ${props => props.myMessage ? "text-align : right;" : "text-align : left;"}
`

function Message({ text, image, uid, time, fullName }: IMessageProps) {
  const { user } = useContext(AuthContext)
  return (
    <>
      <MessageWrapper >
        <MessageAuthor myMessage={user.uid == uid}>{fullName}</MessageAuthor>
        <MessageData myMessage={user.uid == uid}>
          <MessageImage src={image} alt="" />
          <MessageText>{text}</MessageText>
          <MessageTime myMessage={user.uid == uid}> {time.toDate().getHours()} : {time.toDate().getMinutes() < 10 ?  "0" + time.toDate().getMinutes() : time.toDate().getMinutes()}</MessageTime>
        </MessageData>

      </MessageWrapper>
    </>

  )
}

export default Message