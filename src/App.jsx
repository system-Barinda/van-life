import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Layout from "./components/Layout"
import HostDashboard from "./pages/mobile/HostDashboard"
import HostReviews from "./pages/mobile/HostReviews"
import HostVanDetails from "./pages/mobile/HostVanDetails"
import HostVanPhotes from "./pages/mobile/HostVanPhotos"
import HostVans from "./pages/mobile/HostVans"
import HostVanPricing from "./pages/mobile/HostVanPricing"
import Income from "./pages/mobile/Income"
import Navigation from "./components/Navigation"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />

              <Route path='/Host' element={<Navigation />}>
                       <Route path='/Host' element={<HostDashboard />} />
                       <Route path='/Host/Vans' element={<HostVans />} />
                       <Route path='/Host/HostVanDetails' element={<HostVanDetails />} />
                       <Route path='/Host/HostReviews' element={<HostReviews />} />
                       <Route path='/Host/Income' element={<Income/>} />
              </Route>         
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
