'use client'
import { useEffect } from 'react'

interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
  id: string
}

/**
 * Injects a JSON-LD structured data script into <head>.
 * Uses DOM API instead of dangerouslySetInnerHTML.
 * Schema must always be hardcoded server-side constants — never user input.
 */
export default function JsonLd({ schema, id }: JsonLdProps) {
  useEffect(() => {
    const existing = document.getElementById(id)
    if (existing) existing.remove()

    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.getElementById(id)?.remove()
    }
  }, [id, schema])

  return null
}
