import { AuthContext } from 'context/UserAuthContext'
import React, { useContext } from 'react'
import styled from 'styled-components'

interface IMessageProps {
  text: string,
  image: string,
  uid: string
}

const MessageData = styled.div<{ myMessage: boolean }>`
  display : flex;
  align-items : center;
  gap : 12px;
  flex-direction: ${props => props.myMessage ? "row-reverse" : "row"} ;
`
const MessageImage = styled.img`
  border-radius : 100%;
  heigh : 32px;
  width : 32px;
`
const MessageText = styled.p`
  font-size : 18px;
`

const MessageTime = styled.span`
  font-size : 14px;
`

function Message({ text, image, uid }: IMessageProps) {
  const { user } = useContext(AuthContext)
  return (
    <MessageData myMessage={user.uid == uid}>
      <MessageImage src={image} alt="" />
      <MessageText>{text}</MessageText>
    </MessageData>
  )
}

export default Message