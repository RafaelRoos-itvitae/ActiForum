import './main.css'
import react from '@vitejs/plugin-react'
import ReactDOM from 'react-dom'
import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import RecentThreads from './RecentThreads.tsx'
import Login from './Login.jsx'
import ThreadCreation from './ThreadCreation.jsx'
import Profile from './Profile.jsx'
import Home from './Home.jsx'
import Thread from './Thread.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<RecentThreads />} />
          <Route path="login" element={<Login />} />
          <Route path="thread/create" element={<ThreadCreation />} />
          <Route path="user" element={<Profile />} />
          <Route path="thread/:threadId" element={<Thread />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)