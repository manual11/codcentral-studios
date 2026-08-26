export interface WebMcpFormField {
  name: string
  label: string
  type: string
  required?: boolean
  placeholder?: string
  options?: string[]
}

export interface WebMcpForm {
  id: string
  name: string
  description: string
  method: 'GET' | 'POST'
  endpoint: string
  successMessage: string
  fields: WebMcpFormField[]
}

export interface WebMcpManifest {
  version: string
  siteName: string
  description: string
  routes: Array<{
    path: string
    title: string
    purpose: string
  }>
  forms: WebMcpForm[]
  actions: string[]
}

export interface WebMcpApi {
  manifest: WebMcpManifest
  getManifest: () => WebMcpManifest
  getForm: (id: string) => WebMcpForm | undefined
  getRoute: (path: string) => WebMcpManifest['routes'][number] | undefined
  getActions: () => string[]
}

export function getWebMcpManifest(): WebMcpManifest {
  return {
    version: '1.0.0',
    siteName: 'Codcentral Studios',
    description:
      'Codcentral helps African businesses deploy AI-powered growth systems through automation, lead generation, and digital operations.',
    routes: [
      { path: '/', title: 'Home', purpose: 'Main marketing landing page with services overview.' },
      { path: '/blog', title: 'Blog', purpose: 'Article library for AI and automation insights.' },
      { path: '/real-estate', title: 'Real Estate', purpose: 'Specialized property marketing and lead generation page.' },
      { path: '/terms', title: 'Terms', purpose: 'Terms of service information.' },
      { path: '/privacy', title: 'Privacy', purpose: 'Privacy and cookie policies.' },
    ],
    forms: [
      {
        id: 'contact-form',
        name: 'Contact inquiry',
        description: 'Collects a prospect inquiry for a free discovery call.',
        method: 'POST',
        endpoint: 'https://formspree.io/f/mgvzoyob',
        successMessage: 'Your message was sent successfully.',
        fields: [
          { name: 'name', label: 'Full name', type: 'text', required: true, placeholder: 'Your name' },
          { name: 'email', label: 'Email address', type: 'email', required: true, placeholder: 'you@company.com' },
          { name: 'business', label: 'Business name', type: 'text', placeholder: 'Your business' },
          { name: 'service', label: 'Service interest', type: 'select', placeholder: 'Select a module' },
          { name: 'message', label: 'Project details', type: 'textarea', required: true, placeholder: 'Tell us about your business.' },
        ],
      },
      {
        id: 'newsletter-form',
        name: 'Newsletter signup',
        description: 'Captures email addresses for the AI Leverage Journal.',
        method: 'POST',
        endpoint: 'https://formspree.io/f/mgvzoyob',
        successMessage: 'You have subscribed successfully.',
        fields: [{ name: 'email', label: 'Email address', type: 'email', required: true, placeholder: 'your@email.com' }],
      },
    ],
    actions: ['contact', 'newsletter', 'cookie-consent'],
  }
}

export function registerWebMcp(): WebMcpApi {
  if (typeof window === 'undefined') {
    const manifest = getWebMcpManifest()
    return {
      manifest,
      getManifest: () => manifest,
      getForm: (id) => manifest.forms.find((form) => form.id === id),
      getRoute: (path) => manifest.routes.find((route) => route.path === path),
      getActions: () => manifest.actions,
    }
  }

  const manifest = getWebMcpManifest()
  const api: WebMcpApi = {
    manifest,
    getManifest: () => manifest,
    getForm: (id) => manifest.forms.find((form) => form.id === id),
    getRoute: (path) => manifest.routes.find((route) => route.path === path),
    getActions: () => manifest.actions,
  }

  window.WebMCP = api
  window.__WEBMCP__ = api

  const existing = document.getElementById('webmcp-manifest')
  if (!existing) {
    const script = document.createElement('script')
    script.id = 'webmcp-manifest'
    script.type = 'application/json'
    script.textContent = JSON.stringify(manifest)
    document.head.appendChild(script)
  }

  return api
}

declare global {
  interface Window {
    WebMCP?: WebMcpApi
    __WEBMCP__?: WebMcpApi
  }
}
