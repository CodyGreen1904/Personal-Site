import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"

import { About, PreviousWork, Projects, Contact } from "./components"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/PreviousWork" element={<PreviousWork />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
