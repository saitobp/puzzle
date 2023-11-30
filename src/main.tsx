import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const element = document.getElementById('root')!
const root = createRoot(element)

root.render(
  <StrictMode>
    <h1>Puzzle</h1>
  </StrictMode>,
)
