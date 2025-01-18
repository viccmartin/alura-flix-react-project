import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/NavBar";
import GlobalProvider from './context/GlobalContext';
import Home from "./pages/Home";
import NewVideo from "./pages/NewVideo";



function App() {

  return (
    <>
      <Router>
        <GlobalProvider>
          <GlobalStyles />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-video" element={<NewVideo />} />
          </Routes>
        </GlobalProvider>
      </Router>
    </>
  )
}

export default App
