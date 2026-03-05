import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"

import Layout from "./components/Layout"
import Navigation from "./components/Navigation"

import HostDashboard from "./pages/mobile/HostDashboard"
import HostReviews from "./pages/mobile/HostReviews"
import HostVanDetails from "./pages/mobile/HostVanDetails"
import Income from "./pages/mobile/Income"
import HostVans from './pages/mobile/HostVans'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Vans */}
          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>

          {/* Host */}
          <Route path="Host" element={<Navigation />}>

            <Route index element={<HostDashboard />} />

            {/* FIXED */}
            <Route path="HostVanDetails/:id" element={<HostVanDetails />} />

            <Route path="HostReviews" element={<HostReviews />} />
            <Route path="Income" element={<Income />} />

          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App