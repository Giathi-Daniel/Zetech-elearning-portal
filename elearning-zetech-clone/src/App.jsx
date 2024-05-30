import React from 'react'
import Hero from './Components/Hero/Hero'
import Navigation from './Components/Navigation/Navigation'
import Footer from './Components/Footer/Footer'
// import reactLogo from './assets/react.svg'  -> src folder
// import viteLogo from '../public/images/vite.svg' -> public folder (images that do not change suitable for build)

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <h1>Hello World!</h1>
      <Footer />
    </>
  )
}
export default App
