import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Bg, Btn2, Counters, DarkLight, MappedNumbers, MappingNumbers, Sum, ThemeTwo} from './App.tsx'
import { App } from './App.tsx'
import { Btn } from './App.tsx'
import { Fname, InOut } from './App.tsx'
import { Theme,ThemeThree} from './App.tsx'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sum /> <App />
    <Btn /> <Btn2 />
    <Counters /> <DarkLight />
    <Fname /> <InOut />
    <MappedNumbers /> <MappingNumbers />
    <Theme /> <ThemeTwo /> <ThemeThree /> <Bg />
   
  </StrictMode>,
)
