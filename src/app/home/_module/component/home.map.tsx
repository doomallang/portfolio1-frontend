'use client'

import { useEffect } from 'react'

export default function HomeMap() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('cccc')
      const initMap = () => {
        const options = {
          mapId: 'vmap',
          initPosition: new vw.CameraPosition(
            new vw.CoordZ(127.425, 38.196, 1548700),
            new vw.Direction(0, -90, 0),
          ),
          logo: true,
          navigation: true,
        }

        const map = new vw.Map() // Map 객체 생성
        console.log('Map 객체 생성됨:', map) // Map 객체 생성 확인
        map.setOption(options) // 옵션 설정
        map.start() // 지도 시작
      }

      try {
        initMap() // 스크립트가 로드된 후 지도 초기화
      } catch (error) {
        console.error('지도 초기화 중 오류 발생:', error)
      }
    }
  }, []) // 스크립트 로드 상태가 변경될 때 실행

  return (
    <div>
      asdfadsf
      <div id="vmap" style={{ width: '100%', height: '400px', border: '1px solid black' }}></div>
    </div>
  )
}
