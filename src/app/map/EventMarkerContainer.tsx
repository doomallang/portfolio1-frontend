import { MapMarker, useMap } from 'react-kakao-maps-sdk'
import { useState } from 'react'

export default function EventMarkerContainer({ position, title, content, i, places, image }: any) {
  const map = useMap()
  const [selectedPlace, setSelectedPlace] = useState()
  const [isVisible, setIsVisible] = useState(false)

  const imageSize = { width: 36, height: 37 }
  //const spriteSize = { width: 36, height: 691 }

  return (
    <MapMarker
      position={position}
      image={{
        src: image,
        size: imageSize,
        options: {
          //spriteSize: spriteSize,
          //spriteOrigin: new kakao.maps.Point(0, i * 46 + 10),
          //offset: new kakao.maps.Point(13, 37),
        },
      }}
      onClick={(item) => {
        map.panTo(item.getPosition())
        setSelectedPlace(places[i])
      }}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && (
        <>
          <div style={{ color: '#000' }}>{title}</div>
          <div>{content}</div>
        </>
      )}
    </MapMarker>
  )
}
