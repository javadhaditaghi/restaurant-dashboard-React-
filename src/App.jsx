import ReactDOM from "react-dom/client";
import MiniDrawer from "./components/sidebar/sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Orders from "./pages/orders";
import Customers from "./pages/Customers";
import Menues from "./menues";
import Analytics from "./pages/analytics";
import CustomerReviews from "./pages/customerReviews";






function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MiniDrawer />}>

          <Route index element={<Dashboard />} />
          <Route path="/customer_reviews" element={<CustomerReviews />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/menues" element={<Menues />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>





  )
}

export default App
