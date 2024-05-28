import { useMemo, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { addImage } from '@/api/api.free.notice'

export default function HtmlEditor({ text, setText }: { text: string; setText: Function }) {
  const quillRef = useRef(null)

  const imageHandler = async () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.addEventListener('change', async () => {
      //이미지를 담아 전송할 formData를 만든다
      const file = input.files?.[0]
      try {
        const response = await addImage(file!)
        const imagePath = `http://localhost:3000/saveImages/` + encodeURI(response.data)
        //useRef를 사용해 에디터에 접근한 후
        //에디터의 현재 커서 위치에 이미지 삽입
        const editor = quillRef.current.getEditor()
        const range = editor.getSelection()
        // 가져온 위치에 이미지를 삽입한다
        editor.insertEmbed(range.index, 'image', imagePath)
      } catch (error) {
        console.log(error)
      }
    })
  }

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
          image: imageHandler,
        },
      },
    }
  }, [])

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      style={{ height: '300px' }}
      modules={modules}
      onChange={(e) => setText(e)}
      value={text}
    />
  )
}
