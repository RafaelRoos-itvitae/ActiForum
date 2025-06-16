import './main.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import RecentThreads from './RecentThreads.tsx'
import Login from './Login.jsx'
import ThreadCreation from './ThreadCreation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<RecentThreads />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thread/create" element={<ThreadCreation />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)