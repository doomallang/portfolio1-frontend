import { useEffect, useRef, useState } from 'react'
import { Client, Message } from '@stomp/stompjs'
import { Button, Input, InputRef, List, Space } from 'antd'
import SockJS from 'sockjs-client'
import style from '../css/chat.module.css'

interface ChatMessage {
  sender?: string
  content: string
  timestamp?: number
}

export default function StockChat() {
  const [stompClient, setStompClient] = useState<Client | null>(null)
  const [message, setMessage] = useState<string>('')
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const chatListRef = useRef<HTMLDivElement>(null) // useRef로 textarea 참조
  const inputRef = useRef<InputRef>(null) // useRef로 input 참조

  useEffect(() => {
    // 서버로부터 초기 메시지를 가져옴
    const loadMessages = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/chat/messages')
        const data: any = await response.json()
        console.log(data.data!)
        setChatMessages(data.data!)
      } catch (error) {
        console.error('Error loading chat messages:', error)
      }
    }

    loadMessages()

    // WebSocket 연결 설정 (한 번만 실행됨)
    const socket = new SockJS(`https://strengths-oct-restrict-green.trycloudflare.com/ws`)
    //const socket = new SockJS('/ws')
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

        setChatMessages((prevMessages: any[]) => [...prevMessages, newMessage])
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 한글 조합 중이면 무시 (Enter 눌러도 아직 확정 안 됐을 수 있음)
    if (e.nativeEvent.isComposing) return

    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  const sendMessage = () => {
    if (stompClient && message.trim() !== '') {
      const chatMessage: ChatMessage = { content: message }
      stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(chatMessage),
      })

      setMessage('') // 메시지 전송 후 입력창 비우기

      // 메시지 전송 후 input에 커서를 놓기
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight
    }
  }, [chatMessages])

  return (
    <div>
      <label style={{ fontWeight: 'bold', fontSize: 'larger' }}>실시간 대화</label>
      <div ref={chatListRef} className={style.chatList}>
        <List
          dataSource={chatMessages}
          renderItem={(item: ChatMessage) => {
            const date = new Date(item.timestamp!)
            const showDate =
              date.getFullYear() +
              '-' +
              (date.getMonth() + 1) +
              '-' +
              date.getDate() +
              ' ' +
              date.getHours() +
              ':' +
              date.getMinutes() +
              ':' +
              date.getSeconds()
            return (
              <List.Item>
                <List.Item.Meta title={<div>{item.content}</div>} description={showDate} />
              </List.Item>
            )
          }}
          locale={{ emptyText: <></> }}
        />
      </div>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          type="text"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef} // inputRef로 Input 참조
        />
        <Button type="primary" onClick={sendMessage}>
          전송
        </Button>
      </Space.Compact>
    </div>
  )
}
