import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Routines from './pages/routines/Routines.tsx'
import Tasks from './pages/tasks/Tasks.tsx'
import { UserProvider } from './contexts/UserContext.tsx'
import Container from '@mui/material/Container'

const containerStyle = { 
  display: "flex",
  flexDirection: "column",
  height: "100vh", 
  backgroundColor: "lightgrey",
  flexGrow: 1
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Container
      maxWidth="lg" 
      sx={containerStyle} 
      fixed
      disableGutters>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="routines" element={<Routines />} />
              <Route path="tasks" element={<Tasks />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </Container>
  </StrictMode>,
)
