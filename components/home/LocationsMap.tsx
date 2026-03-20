'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import type { Location } from '@/lib/constants/locations'

interface Props {
  locations: Location[]
}

const COORDS: Record<string, [number, number]> = {
  orange: [33.7879, -117.8531],
  pomona: [34.0581, -117.7575],
  'san-bernardino': [34.1022, -117.3098],
  walnut: [34.0219, -117.8617],
}

export default function LocationsMap({ locations }: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const markersRef = useRef<Map<string, any>>(new Map())

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return

    let L: any

    async function init() {
      L = (await import('leaflet')).default

      // Fix default marker icon path issue with Next.js
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      // Center on Southern California
      const map = L.map(mapRef.current!, {
        center: [33.98, -117.72],
        zoom: 10,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      })

      mapInstance.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      const goldIcon = L.divIcon({
        className: '',
        html: `
          <div style="
            width: 36px; height: 36px;
            background: #C9A84C;
            border: 3px solid #fff;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 2px 8px rgba(0,0,0,0.35);
          ">
            <div style="
              width: 10px; height: 10px;
              background: #fff;
              border-radius: 50%;
              position: absolute;
              top: 50%; left: 50%;
              transform: translate(-50%,-50%);
            "></div>
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -38],
      })

      locations.forEach((loc) => {
        const coords = COORDS[loc.slug]
        if (!coords) return

        const marker = L.marker(coords, { icon: goldIcon })
          .addTo(map)
          .bindPopup(`
            <div style="font-family: Inter, sans-serif; min-width: 180px; padding: 4px 2px;">
              <div style="font-weight: 700; font-size: 15px; color: #1C1917; margin-bottom: 4px;">
                ${loc.name}
              </div>
              <div style="font-size: 12px; color: #8A7F72; margin-bottom: 6px; line-height: 1.5;">
                ${loc.address}
              </div>
              <div style="font-size: 12px; color: #8A7F72; margin-bottom: 8px;">
                ${loc.phone}
              </div>
              <a href="/locations/${loc.slug}"
                style="display:inline-block; background:#C9A84C; color:#1C1917; font-weight:600;
                       font-size:11px; padding:5px 10px; border-radius:6px; text-decoration:none;">
                View Location →
              </a>
            </div>
          `, { maxWidth: 240 })

        marker.on('click', () => setActiveSlug(loc.slug))
        markersRef.current.set(loc.slug, marker)
      })
    }

    init()

    return () => {
      mapInstance.current?.remove()
      mapInstance.current = null
    }
  }, [locations])

  function flyTo(slug: string) {
    const coords = COORDS[slug]
    if (!mapInstance.current || !coords) return
    setActiveSlug(slug)
    mapInstance.current.flyTo(coords, 14, { duration: 0.8 })
    const marker = markersRef.current.get(slug)
    marker?.openPopup()
  }

  return (
    <section className="bg-charcoal">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center">
          <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Southern California</p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream">Find a Location Near You</h2>
        </div>
      </div>

      {/* Map + sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-xl overflow-hidden border border-white/10">

          {/* Mobile: pill grid */}
          <div className="lg:hidden grid grid-cols-2 gap-2 px-4 py-3 bg-charcoal border-b border-white/10">
            {locations.map((loc) => (
              <button
                key={loc.slug}
                onClick={() => flyTo(loc.slug)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeSlug === loc.slug
                    ? 'bg-gold text-charcoal'
                    : 'bg-white/8 text-cream/70 hover:bg-white/15 hover:text-cream'
                }`}
              >
                ◎ {loc.name}
              </button>
            ))}
          </div>

          {/* Desktop: vertical sidebar + map */}
          <div className="grid lg:grid-cols-[280px_1fr]">
            <div className="hidden lg:block bg-charcoal border-r border-white/10">
              {locations.map((loc) => (
                <button
                  key={loc.slug}
                  onClick={() => flyTo(loc.slug)}
                  className={`w-full text-left px-5 py-4 border-b border-white/8 transition-all duration-200 group ${
                    activeSlug === loc.slug
                      ? 'bg-gold/15 border-l-2 border-l-gold'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`mt-0.5 text-lg leading-none transition-colors ${
                      activeSlug === loc.slug ? 'text-gold' : 'text-gold/50 group-hover:text-gold/80'
                    }`}>
                      ◎
                    </span>
                    <div>
                      <p className={`font-semibold text-sm transition-colors ${
                        activeSlug === loc.slug ? 'text-gold' : 'text-cream'
                      }`}>
                        {loc.name}
                      </p>
                      <p className="text-xs text-muted mt-0.5 leading-relaxed">{loc.address}</p>
                      <p className="text-xs text-muted/70 mt-1">{loc.phone}</p>
                      <Link
                        href={`/locations/${loc.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block mt-2 text-[11px] text-gold hover:text-gold-light font-medium transition-colors"
                      >
                        Details & Hours →
                      </Link>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Map */}
            <div className="relative h-[340px] lg:h-[460px]">
              <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
              />
              <div ref={mapRef} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
