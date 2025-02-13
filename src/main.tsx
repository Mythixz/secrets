import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LoveMessage from './msg.tsx'
import Card from './card.tsx'
import Bby from './bby';  // Importing bby.tsx as the main component


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Bby />
    <LoveMessage />
    <Card />
  </StrictMode>,
)
