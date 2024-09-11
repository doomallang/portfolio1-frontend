'use client'

import { useState, useEffect } from 'react'
import SockJS from 'sockjs-client'
import { Client, Message } from '@stomp/stompjs'

interface ChatMessage {
  content: string
}

export default function Home() {
  const [stompClient, setStompClient] = useState<Client | null>(null)
  const [message, setMessage] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<string[]>([])

  useEffect(() => {
    // 서버로부터 초기 메시지를 가져옴
    const loadMessages = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/chat/messages')
        const data: any = await response.json()
        setChatMessages(data.data!)
      } catch (error) {
        console.error('Error loading chat messages:', error)
      }
    }

    loadMessages()

    // WebSocket 연결 설정 (한 번만 실행됨)
    const socket = new SockJS('http://localhost:8080/ws')
    const stomp = new Client({
      webSocketFactory: () => socket as WebSocket, // SockJS를 WebSocket으로 사용
      reconnectDelay: 5000, // 재연결 딜레이
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    })

    stomp.onConnect = (frame) => {
      console.log('Connected: ' + frame)
      // 메시지 수신 시 핸들러
      stomp.subscribe('/topic/messages', (messageOutput: Message) => {
        const newMessage: ChatMessage = JSON.parse(messageOutput.body)
        console.log(newMessage)
        setChatMessages((prevMessages) => [...prevMessages, newMessage.content])
      })
    }

    stomp.onStompError = (frame) => {
      console.error('Broker error: ' + frame.headers['message'])
    }

    stomp.activate() // WebSocket 연결 활성화
    setStompClient(stomp) // 상태 업데이트

    // Clean up function: 컴포넌트가 언마운트될 때 WebSocket 연결 해제
    return () => {
      stomp.deactivate() // WebSocket 연결 해제 (stompClient 직접 사용하지 않고 stomp 사용)
    }
    // 빈 배열을 사용하여 useEffect가 한 번만 실행되도록 함
  }, [])

  const sendMessage = () => {
    if (stompClient && message.trim() !== '') {
      console.log('ccc')
      const chatMessage: ChatMessage = { content: message }
      stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(chatMessage),
      })

      setMessage('') // 메시지 전송 후 입력창 비우기
    }
  }

  return (
    <div>
      <textarea id="chatbox" value={chatMessages.join('\n')} readOnly rows={10} cols={50} />
      <br />
      <input
        type="text"
        value={message}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}
