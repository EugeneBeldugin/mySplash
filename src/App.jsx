import './App.css'
import { Header } from './layout'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
