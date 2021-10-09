import type { AppProps } from 'next/app'
import '@components/LiquidButton.scss'

function Issure({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default Issure
