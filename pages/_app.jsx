import '@/styles/globals.scss'
import { Montserrat } from '@next/font/google' // Font
import { Provider } from 'react-redux';  // Redux
import wrapper from '@/redux/withRedux';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})
function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
  )
}
export default wrapper.withRedux(App);
