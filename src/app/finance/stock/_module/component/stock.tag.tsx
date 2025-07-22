import { Tag, Tooltip } from 'antd'

export default function StockTag({ text, tip }: { text: string; tip: string }) {
  function getRandomHexColor(): string {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
    <Tooltip
      title={
        <div
          style={{
            maxWidth: 400,
            whiteSpace: 'normal',
            lineHeight: 1.5,
          }}
          dangerouslySetInnerHTML={{ __html: tip }}
        ></div>
      }
    >
      <Tag color={getRandomHexColor()}>{text}</Tag>
    </Tooltip>
  )
}
