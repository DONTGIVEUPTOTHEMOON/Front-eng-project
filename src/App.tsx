import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Community from './pages/Community'
import Profile from './pages/Profile'
import Create from './components/community/content/Create'
import PostDetail from './pages/PostDetail'
import Login from './pages/Login'
import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'
import EditContent from './components/community/content/EditContent'
import CourseDrawing from './pages/CourseDrawing'
import CourseCon from './pages/CourseCon'

import CourseVisual from './pages/CourseVisual '
import CourseIn from './pages/CourseIn'

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/coursedrawing" element={<CourseDrawing />} />
        <Route path="/coursecon" element={<CourseCon />} />
        <Route path="/coursein" element={<CourseIn />} />
        <Route path="/coursevisual" element={<CourseVisual />} />
        <Route path="/post/:id" element={<PostDetail />} />

        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create/:id" element={<Create />} />
          <Route path="/editcontent/:id" element={<EditContent />} />
        </Route>

        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}
export default App
