'use client'

import Head from 'next/head'
import { useEffect, useState } from 'react'
import 'ol/ol.css'
import { Feature, Map, View } from 'ol'
import { XYZ } from 'ol/source'
import { defaults } from 'ol/control'
import { fromLonLat, toLonLat } from 'ol/proj'
import { Tile } from 'ol/layer'
import { Icon, Style } from 'ol/style'
import { Point } from 'ol/geom'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'

export default function Map2Body() {
  const [map, setMap] = useState<Map | null>(null)
  const [zoomLevel, setZoomLevel] = useState<number | null>(null)
  const [centerCoords, setCenterCoords] = useState<[number, number] | null>(null)

  useEffect(() => {
    const vworldLayer = new Tile({
      source: new XYZ({
        url: 'https://api.vworld.kr/req/wmts/1.0.0/ADF6D980-18D4-38AB-BB03-609D81FD1D10/Base/{z}/{y}/{x}.png',
      }),
    })

    const initialView = new View({
      center: fromLonLat([127.425, 38.196]), // 기본 좌표 (한국 중부)
      zoom: 15,
    })

    const newMap = new Map({
      controls: defaults({ zoom: true, rotate: false }).extend([]),
      layers: [vworldLayer],
      target: 'map',
      view: initialView,
    })

    setMap(newMap)

    // ✅ 지도 이벤트 감지 (확대 & 이동)
    newMap.on('moveend', () => {
      const newZoom = newMap.getView().getZoom() ?? 0
      const newCenter = toLonLat(newMap.getView().getCenter() || [0, 0])
      setZoomLevel(newZoom)
      setCenterCoords(newCenter)
      console.log(`🔍 Zoom Level: ${newZoom}, 📍 Center: ${newCenter}`)
    })

    // ✅ 현재 위치 가져와서 지도 이동 & 마커 추가
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userCoords = [position.coords.longitude, position.coords.latitude]
          console.log('📍 현재 위치:', userCoords)

          // 지도 위치 변경
          newMap.getView().setCenter(fromLonLat(userCoords))
          newMap.getView().setZoom(16)

          // 마커 추가
          addMarker(newMap, userCoords)
        },
        (error) => console.error('❌ 위치 정보를 가져올 수 없습니다:', error),
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
      )
    } else {
      console.error('❌ 이 브라우저에서는 위치 정보를 지원하지 않습니다.')
    }

    return () => newMap.setTarget(undefined) // 언마운트 시 정리
  }, [])

  // ✅ 현재 위치 마커 추가 함수
  function addMarker(mapInstance: Map, coords: number[]) {
    const marker = new Feature({
      geometry: new Point(fromLonLat(coords)),
    })

    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg', // 빨간색 마커 아이콘
          scale: 0.05,
        }),
      }),
    )

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker],
      }),
    })

    mapInstance.addLayer(vectorLayer)
    console.log('📍 현재 위치 마커 추가 완료')
  }

  return (
    <>
      <Head>
        <title>VWORLD OpenLayers Map</title>
      </Head>
      <main>
        <h2>VWORLD Map with Zoom & Move Detection</h2>
        <div id="map" style={{ width: '100%', height: '80vh' }}></div>
        {/* ✅ 현재 확대 레벨 & 중심 좌표 표시 */}
        <div
          style={{ marginTop: '10px', padding: '10px', background: '#f0f0f0', borderRadius: '5px' }}
        >
          <p>🔍 현재 줌 레벨: {zoomLevel ?? '로드 중...'}</p>
          <p>
            📍 현재 지도 중심:{' '}
            {centerCoords
              ? `${centerCoords[0].toFixed(5)}, ${centerCoords[1].toFixed(5)}`
              : '로드 중...'}
          </p>
        </div>
      </main>
    </>
  )
}
