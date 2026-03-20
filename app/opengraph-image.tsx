import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Levant Gold & Silver — Buy & Sell Precious Metals in Southern California'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1C1917',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gold gradient top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: 'linear-gradient(90deg, #A07830, #C9A84C, #E8C878, #C9A84C, #A07830)',
          }}
        />

        {/* Subtle background texture via radial gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 800px 500px at 50% 50%, rgba(201,168,76,0.07) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
            padding: '0 80px',
            zIndex: 1,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              color: '#C9A84C',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            Southern California&apos;s Trusted Precious Metals Dealer
          </div>

          {/* Main headline */}
          <div
            style={{
              color: '#F8F4EC',
              fontSize: 76,
              fontWeight: 800,
              textAlign: 'center',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            Levant Gold &amp; Silver
          </div>

          {/* Subline */}
          <div
            style={{
              color: 'rgba(248,244,236,0.55)',
              fontSize: 26,
              textAlign: 'center',
              display: 'flex',
            }}
          >
            Buy &amp; Sell Gold · Silver · Platinum · Palladium
          </div>

          {/* Location pills */}
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            {['Orange', 'Pomona', 'San Bernardino', 'Walnut'].map((city) => (
              <div
                key={city}
                style={{
                  border: '1px solid rgba(201,168,76,0.45)',
                  color: '#C9A84C',
                  padding: '7px 16px',
                  borderRadius: 7,
                  fontSize: 15,
                  display: 'flex',
                }}
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        {/* Gold bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            background: 'linear-gradient(90deg, #A07830, #C9A84C, #E8C878, #C9A84C, #A07830)',
          }}
        />
      </div>
    ),
    { ...size },
  )
}
