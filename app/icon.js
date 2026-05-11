export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div style={{
      background: '#8a5cf6',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      fontSize: 20,
      color: 'white',
    }}>
      ✂
    </div>
  )
}