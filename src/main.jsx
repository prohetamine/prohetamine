import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import * as Redstone from '@prohetamine/redstone'
import { StasPayProvider } from 'stas-pay'
import './index.css'
import Home from './pages/home.jsx'

const config = {
  metadata: {
    name: 'Stas Prohetamine',
    description: 'My space website  ⌬ʲˢ³',
    url: 'https://prohetamine.ru',
    icons: ['https://prohetamine.ru/icon.svg']
  },
  projectId: '1febfd92481d4ea997711d2ac4a363c0',
  host: '/'
}

alert('Сайт в разрботке ٩(×̯×)۶')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Redstone.Provider config={config}>
      <StasPayProvider>
        <BrowserRouter basename="/">
          <Routes>
            <Route index element={<Home />} />
            <Route path='/bio' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </StasPayProvider>
    </Redstone.Provider>
  </StrictMode>,
)
