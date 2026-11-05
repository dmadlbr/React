// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Bg, Btn2, Counters, DarkLight, MappedNumbers, MappingNumbers, Sum, ThemeTwo} from './App.tsx'
import { App } from './App.tsx'
import { Btn } from './App.tsx'
import { Fname, InOut } from './App.tsx'
import { Theme,ThemeThree} from './App.tsx'
import './main.css'
import { App2 } from './hook.tsx';
import { App3 } from './h.tsx'
import { App4 } from './hook.tsx'
import { RefPage , MutableValueRefPage } from './hook.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <div>
    <Sum /> <App />
    <Btn /> <Btn2 />
    <Counters /> <DarkLight />
    <Fname /> <InOut />
    <MappedNumbers /> <MappingNumbers />
    <Theme /> <ThemeTwo /> <ThemeThree /> <Bg />
    <App2 /> <App3 /> <App4 /> <RefPage /> 
    <MutableValueRefPage />
   </div>
  // </StrictMode>,
)
