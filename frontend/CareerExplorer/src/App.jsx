import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Landing from './pages/Landing.jsx'
import Main from './pages/Home.jsx'
import Results from './pages/Results.jsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
