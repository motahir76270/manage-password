import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Manger from './component/manger'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Manger />
    <Footer />

    
    </>
  )
}

export default App
