import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import { HookForm } from './pages/hookFormPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> <HookForm />
  </StrictMode>,
)
