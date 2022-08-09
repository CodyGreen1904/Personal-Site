import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"

import { About, PreviousWork, Projects, Contact } from "./components"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Personal-Site/" element={<About />} />
        <Route path="/Personal-Site/PreviousWork" element={<PreviousWork />} />
        <Route path="/Personal-Site/Projects" element={<Projects />} />
        <Route path="/Personal-Site/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
