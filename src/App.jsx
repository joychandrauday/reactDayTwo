import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './eventHandler'
import UseStateFunction from './useStateSection'
import UseHook from './UseHooks'
import UseEffectSection from './UseEffect'
import UserDetails from './UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage></HomePage>
      <UseStateFunction></UseStateFunction>
      <UseHook></UseHook>
      <UseEffectSection></UseEffectSection>
    </>
  )
}

export default App
