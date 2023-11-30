import { Home } from '@/Home'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const element = document.getElementById('root')!
const root = createRoot(element)

root.render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
