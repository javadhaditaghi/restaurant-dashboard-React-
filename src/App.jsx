import ReactDOM from "react-dom/client";
import MiniDrawer from "./components/sidebar/sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MiniDrawer />}>
        </Route>
        <Route index element={<Dashboard />} />


      </Routes>
    </BrowserRouter>



  )
}

export default App
