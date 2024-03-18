
import './App.css'
import MyCarousel from './components/Carousel/EventCarousel';
import Contact from './components/Contact/Contact';
// import EventCarousel from './components/Carousel/EventCarousel';
import Intro from './components/Intro/Intro';
import NavBar from './components/NavBar/NavBar';
import ParticlesComponent from './config/particles';
// import  ParticlesBg  from './config/particles';
import { Route, Routes } from 'react-router';
const App = () => {
  return (
    <>
      <ParticlesComponent/>
      <Routes>
        <Route path='/' element={<NavBar/>} >
          <Route index element={<Intro/>} />
          <Route index element={<MyCarousel/>} />
          <Route index element={<Contact/>}/>
        </Route>
      </Routes>
      <Intro/>
      <MyCarousel />
      <Contact />
    </>
  )
}

export default App