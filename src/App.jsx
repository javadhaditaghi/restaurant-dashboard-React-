import ReactDOM from "react-dom/client";
import MiniDrawer from "./components/sidebar/sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";





function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MiniDrawer />}>

          <Route index element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>





  )
}

export default App
