import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HomePage } from './pages/HomePage.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { UserPage } from './pages/UserPage.tsx'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/users/:id" Component={UserPage} />
            </Routes>
        </BrowserRouter>
           {/* <App /> */}
    </QueryClientProvider>

  </StrictMode>,
)
