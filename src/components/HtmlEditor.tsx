'use client'

import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

// ReactQuill을 동적으로 로드하여 클라이언트에서만 실행되도록 설정
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

export default function HtmlEditor({
  text,
  setText,
  reaOnly,
}: {
  text: string
  setText: Function
  reaOnly?: boolean
}) {
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          [{ size: ['small', false, 'large', 'huge'] }],
          [{ align: [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['image'],
          [
            {
              color: [],
            },
            { background: [] },
          ],
        ],
        handlers: {
          image: () => {}, // 이미지 핸들러 추가
        },
      },
    }
  }, [])

  const noShowModules = useMemo(() => {
    return {
      toolbar: false,
    }
  }, [])

  return (
    <ReactQuill
      theme="snow"
      modules={reaOnly ? noShowModules : modules}
      style={{ height: '300px' }}
      onChange={(e) => setText(e)}
      value={text}
      readOnly={reaOnly}
    />
  )
}
