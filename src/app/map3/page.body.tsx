'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Map3Body() {
  const [isMapLoaded, setIsMapLoaded] = useState(false)

  return (
    <div>
      <h2>VWORLD 3D Map Test</h2>
      {/* ✅ iframe을 사용하여 VWORLD 지도 로드 */}
      <iframe
        src="https://map.vworld.kr/map/maps.do?apiKey=ADF6D980-18D4-38AB-BB03-609D81FD1D10"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        onLoad={() => setIsMapLoaded(true)}
      />
      {!isMapLoaded && <p>지도 로딩 중...</p>}
    </div>
  )
}
