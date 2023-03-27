import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Travel from "./components/TravelJournal";
import MemeGen from "./components/MemeGen";
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Routes>

        <Route path='/home' element={<Main />}></Route>
        <Route path='/travelJournal' element={<Travel />}></Route>
        <Route path='/memeGen' element={<MemeGen />}></Route>

      </Routes>

    </div>
  )
}

export default App
