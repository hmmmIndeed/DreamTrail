import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home'
import StatsPage from './pages/StatsPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className = "pages">
          <Routes>
            <Route
              path = "/"
              element = {<Home />}
            />
            <Route
              path = "/stats"
              element = {<StatsPage />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
