'use client'

import { Map, MapMarker } from 'react-kakao-maps-sdk'
import useKakaoLoader from '@/app/map/useKakaoLoader'
import { useEffect, useState } from 'react'
import EventMarkerContainer from '@/app/map/EventMarkerContainer'

export default function MapBody() {
  useKakaoLoader()
  const [map, setMap] = useState<any>()
  const [markers, setMarkers] = useState<any[]>([])
  const [places, setPlaces] = useState<any[]>([])
  const [y, setY] = useState(0)
  const [x, setX] = useState(0)
  const [searchInput, setSearchInput] = useState('맛집')
  const [keyword, setKeyword] = useState('맛집')
  const [selectedPlace, setSelectedPlace] = useState()

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setKeyword(searchInput)
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setY(position.coords.latitude)
      setX(position.coords.longitude)
    })
  }, [])

  const getCurrentCoordinate = async () => {
    console.log('getCurrentCoordinate 함수 실행!!!')
    return new Promise((res, rej) => {
      // HTML5의 geolocaiton으로 사용할 수 있는지 확인합니다.
      if (navigator.geolocation) {
        // GeoLocation을 이용해서 접속 위치를 얻어옵니다.
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude // 위도
          const lon = position.coords.longitude // 경도

          const coordinate = new kakao.maps.LatLng(lat, lon)
          res(coordinate)
        })
      } else {
        rej(new Error('현재 위치를 불러올 수 없습니다.'))
      }
    })
  }

  const callBack = (data, status, _pagination) => {
    if (status === kakao.maps.services.Status.OK) {
      setPlaces(data)

      /* 이하는 function displayPlaces(places) 함수와 비슷한 내용 */
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      const bounds = new kakao.maps.LatLngBounds()
      const markers = []

      for (let i = 0; i < data.length; i++) {
        let message = ''
        let image = ''
        if (data[i].place_name.startsWith('세븐일레븐 ')) {
          message = '삼각김밥 2+1'
          image = '/images/sevenEleven.png'
        } else if (data[i].place_name.startsWith('CU ')) {
          message = '컨디션 1+1'
          image = '/images/cu.png'
        } else if (data[i].place_name.startsWith('이마트24 ')) {
          message = '100원 페이백'
          image = '/images/emart24.png'
        } else if (data[i].place_name.startsWith('GS25 ')) {
          message = '현대카드 200원 할인'
          image = '/images/gs25.jpg'
        } else {
          image = '/images/position.jpg'
        }
        console.log(data[i].place_name)
        // @ts-ignore
        markers.push({
          position: {
            lat: data[i].y,
            lng: data[i].x,
          },
          title: data[i].place_name,
          content: message,
          image: image,
        })
        // @ts-ignore
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
      }
      setMarkers(markers)

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      map.setBounds(bounds)
    }
  }

  useEffect(() => {
    if (!map) return
    search()
  }, [map, keyword])

  async function search() {
    const ps = new kakao.maps.services.Places()
    const currentCoordinate = await getCurrentCoordinate()
    const options = {
      location: currentCoordinate,
      radius: 10000,
      sort: kakao.maps.services.SortBy.DISTANCE,
    }
    ps.keywordSearch(keyword, callBack, options)
  }

  return (
    <>
      <Map // 로드뷰를 표시할 Container
        center={{
          y: y,
          x: x,
        }}
        style={{
          width: '100%',
          height: '350px',
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker, i) => (
          <EventMarkerContainer
            key={`EventMarkerContainer-${marker.position.lat}-${marker.position.lng}`}
            position={marker.position}
            title={marker.title}
            content={marker.content}
            image={marker.image}
            i={i}
          />
        ))}
      </Map>
      <div id="menu_wrap" className="bg_white">
        <div className="option">
          <div>
            <form onSubmit={handleSearchSubmit}>
              키워드 :{' '}
              <input
                type="text"
                value={searchInput}
                onChange={handleKeywordChange}
                id="keyword"
                size={15}
              />
              <button type="submit">검색하기</button>
            </form>
          </div>
        </div>
        <hr />
        <ul id="placesList">
          {places.map((item, i) => (
            <li
              key={i}
              className="item"
              onClick={() => {
                map.panTo(new kakao.maps.LatLng(markers[i].position.lat, markers[i].position.lng))
                setSelectedPlace(item)
              }}
            >
              <span className={`markerbg marker_${i + 1}`}></span>
              <div className="info">
                <h5>{item.place_name}</h5>
                {item.road_address_name ? (
                  <>
                    <span>{item.road_address_name}</span>
                    <span className="jibun gray">{item.address_name}</span>
                  </>
                ) : (
                  <span>{item.address_name}</span>
                )}
                <span className="tel">{item.phone}</span>
              </div>
            </li>
          ))}
        </ul>
        <div id="pagination"></div>
      </div>
    </>
  )
}
