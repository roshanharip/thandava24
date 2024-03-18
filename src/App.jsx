
import './App.css'
import MyCarousel from './components/Carousel/EventCarousel';
import Contact from './components/Contact/Contact';
// import EventCarousel from './components/Carousel/EventCarousel';
import Intro from './components/Intro/Intro';
import NavBar from './components/NavBar/NavBar';
import ParticlesComponent from './config/particles';
// import  ParticlesBg  from './config/particles';
import { Route, Routes } from 'react-router';
import Events from './router/Events/Events';
import Landing from './router/Landing/Landing';
const App = () => {
  return (
    <>
      <ParticlesComponent/>
      <Routes>
        <Route path='/' element={<NavBar/>} >
          <Route index element={<Landing/>} />
          <Route path='/events' element={<Events/>} />
        </Route>
      </Routes>
      </>
  )
}

export default App