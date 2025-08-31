
//import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import WhyRyanBanksy from './pages/WhyRyanBanksy'
import Insurance from './pages/Insurance'
import Safety from './pages/Safety'
import Certifications from './pages/Certifications'
import CivicAffiliations from './pages/CivicAffiliations'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import Contractors from './pages/Contractors'
import Coupon from './pages/Coupon'
import HomeV2 from './pages/HomeV2'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col ">
        <Banner />
        <Header />
        <div className="flex-1 ">
          <Routes >


            <Route path="/" element={<HomeV2 />} />
            <Route path="/home-old" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/why-ryan-banksy" element={<WhyRyanBanksy />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/civic-affiliations" element={<CivicAffiliations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contractors" element={<Contractors />} />
            <Route path="/coupon" element={<Coupon />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
