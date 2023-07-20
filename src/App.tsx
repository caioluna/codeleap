import { Route, Routes } from "react-router-dom"
import { Main } from "./pages/Main"
import { Signup } from "./pages/Signup"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/home" element={<Main />} />
    </Routes>
  )
}

export default App
