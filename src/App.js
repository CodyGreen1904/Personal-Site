import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"

import { About, PreviousWork, Projects, Contact } from "./components"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/personal-site/" element={<About />} />
        <Route path="/personal-site/PreviousWork" element={<PreviousWork />} />
        <Route path="/personal-site/Projects" element={<Projects />} />
        <Route path="/personal-site/Contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
