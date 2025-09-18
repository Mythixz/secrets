import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LoveMessage from './msg.tsx'
import Card from './card.tsx'
import Bby from './bby';  // Importing bby.tsx as the main component
import LoveQuiz from './quiz.tsx'
// import LovePlaylist from './random.tsx' // File not found
// import LoveMap from './map.tsx' // Not used
import Bbys from './Bbys.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Bby />
    <Bbys />
    <LoveMessage />
    <Card />
    <LoveQuiz />
    {/* <LoveMap /> */}
  </StrictMode>,
)
