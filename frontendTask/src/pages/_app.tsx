import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store, { Persistor } from '@/redux/store';
import StaticNavigationBar from '@/components/NavBar/StaticNavigationBar';
import { PersistGate } from 'redux-persist/integration/react'

export default function ApMyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <StaticNavigationBar />
        <div style={{ paddingTop: '18vh' }}>
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </Provider >
  )
}
