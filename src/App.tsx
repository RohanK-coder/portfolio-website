
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Articles from './pages/Articles'
import OpenSource from './pages/OpenSource'
import ReachOut from './pages/ReachOut'
import ResponsiveAppBar from './components/ResponsiveAppBar'
export default function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/articles' element={<Articles/>}/>
      <Route path='/open-source' element={<OpenSource/>}/>
      <Route path='/reach-out' element={<ReachOut/>}/>

   </Routes>
    </>
   
  )
}
