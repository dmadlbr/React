import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Btn2, Counters, Sum} from './App.tsx'
import { App } from './App.tsx'
import { Btn } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sum /> <App />
    <Btn /> <Btn2 />
    <Counters />
  </StrictMode>,
)
