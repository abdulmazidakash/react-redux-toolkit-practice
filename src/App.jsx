import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Root from "./layout/Root"
import Rtk from "./pages/Rtk"


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route index element={<Home/>}/>
          <Route path="/rtk"  element={<Rtk/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
