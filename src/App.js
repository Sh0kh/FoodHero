import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainLayouts from "./layouts/MainLayouts"
import AppLayouts from "./layouts/AppLayouts"
import './App.css'
import Home from "./Pages/Home"
import Sales from "./Pages/Sales"
import Top from "./Pages/Top"
import SearchPage from "./Pages/SearchPage"
import Filter from "./Pages/Filter"
import RestInfo from "./Pages/RestInfo"
import Comment from "./Pages/Comment"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayouts />} >
          <Route element={<MainLayouts />}>
              <Route index element={<Home/>} />
              <Route element={<Sales/>} path="/sales"/>
              <Route element={<Top/>} path="/top"/>
              <Route element={<SearchPage/>} path="/search"/>
              <Route element={<Filter/>} path="/filter"/>
              <Route element={<RestInfo/>} path="info/:ID"/>
              <Route element={<Comment/>} path="/comment"/>
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
