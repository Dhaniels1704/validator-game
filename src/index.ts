import checkCache from './handler'
import { LANDING_HTML, DOCS_HTML } from './pages'

export default {
  fetch: async (request: Request): Promise<Response> => {
    const url = new URL(request.url)

    if (url.pathname === '/' || url.pathname === '') {
      return new Response(LANDING_HTML, {
        headers: { 'content-type': 'text/html;charset=UTF-8' }
      })
    }

    if (url.pathname === '/docs' || url.pathname === '/docs/') {
      return new Response(DOCS_HTML, {
        headers: { 'content-type': 'text/html;charset=UTF-8' }
      })
    }

    return await checkCache(request)
  }
}
