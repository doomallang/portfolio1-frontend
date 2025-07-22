import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk'

export default function () {
  useKakaoLoaderOrigin({
    appkey: 'bcb79325b4acc5440c851e5c5a067de3',
    libraries: ['clusterer', 'drawing', 'services'],
  })
}
