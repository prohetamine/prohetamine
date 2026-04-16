import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import { RedstoneProvider } from '@prohetamine/redstone'
import { StasPayProvider } from 'stas-pay'
import './index.css'

import App from './app.jsx'
import Web3 from './pages/web3.jsx'
import Home from './pages/home.jsx'
import Stas from './pages/stas.jsx'
import NotFound from './pages/not-found.jsx'

import Loader from './components/loader.jsx'
import { LanguageProvider } from './contexts/language'
import { ModalWindowProvider } from './contexts/modal-window/index.jsx'

const config = {
  metadata: {
    name: 'Stas Prohetamine',
    description: 'My space website ⌬ʲˢ³',
    url: 'https://prohetamine.ru',
    icons: ['https://prohetamine.ru/icon.svg']
  },
  projectId: '1febfd92481d4ea997711d2ac4a363c0',
  host: '/'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ModalWindowProvider>
        <RedstoneProvider config={config}>
          <StasPayProvider>
            <Loader>
              <BrowserRouter basename='/'>
                <Routes>
                  <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='/bio' element={<Home />} />
                    <Route path='/articles' element={<Home />} />
                    <Route path='/contacts' element={<Home />} />
                    <Route path='/stas' element={<Stas />} />
                    <Route path='/web3' element={<Web3 />} />
                    <Route path='/testnet' element={<Web3 />} />
                  </Route>
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </Loader>
          </StasPayProvider>
        </RedstoneProvider>
      </ModalWindowProvider>
    </LanguageProvider>
  </StrictMode>
)
