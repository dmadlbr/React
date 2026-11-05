import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { CustomHookPage } from "./pages/customHookPage";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomHookPage />
  </StrictMode>,
)
