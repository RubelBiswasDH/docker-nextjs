import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { KEYS } from '@/app.config'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <Script strategy="afterInteractive" src={ `https://www.googletagmanager.com/gtag/js?id=${ KEYS.GOOGLE_ANALYTICS_ID }` } />
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          try{
            gtag('config', KEYS.GOOGLE_ANALYTICS_ID, {
              page_path: window.location.pathname,
            });
          } catch (e) { console.log('') }
        `,
      }}
    />
    <Component {...pageProps} />
  </>)
}
