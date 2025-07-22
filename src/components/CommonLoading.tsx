'use client'

import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 9999,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  pointerEvents: 'all', // 클릭 차단
}

export default function CommonLoading({
  tip = '잠시만 기다려 주세요',
  size = 48,
}: {
  tip?: string
  size?: number
}) {
  return (
    <div style={overlayStyle}>
      <Spin tip={tip} indicator={<LoadingOutlined style={{ fontSize: size }} spin />} />
    </div>
  )
}
