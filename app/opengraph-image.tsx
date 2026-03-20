import { ImageResponse } from 'next/og'
import { readFile } from 'fs/promises'
import path from 'path'

export const runtime = 'nodejs'
export const alt = 'Levant Gold & Silver — Buy & Sell Precious Metals in Southern California'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const [heroBuffer, logoBuffer] = await Promise.all([
    readFile(path.join(process.cwd(), 'public/images/hero/home-banner.webp')),
    readFile(path.join(process.cwd(), 'public/images/logo/levant-logo.webp')),
  ])

  const heroSrc = `data:image/webp;base64,${heroBuffer.toString('base64')}`
  const logoSrc = `data:image/webp;base64,${logoBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative' }}>
        {/* Hero background */}
        <img
          src={heroSrc}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(28,25,23,0.50)',
            display: 'flex',
          }}
        />

        {/* Logo centered */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={logoSrc}
            style={{ width: 420, objectFit: 'contain' }}
          />
        </div>

        {/* Gold bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background:
              'linear-gradient(90deg, #A07830, #C9A84C, #E8C878, #C9A84C, #A07830)',
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
