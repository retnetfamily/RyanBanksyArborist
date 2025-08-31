
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
            <Route path="/RyanBanksyArborist/" element={<HomeV2 />} />
            <Route path="/RyanBanksyArborist/home-old" element={<Home />} />
            <Route path="/RyanBanksyArborist/services" element={<Services />} />
            <Route path="/RyanBanksyArborist/about" element={<AboutUs />} />
            <Route path="/RyanBanksyArborist/about-us" element={<AboutUs />} />
            <Route path="/RyanBanksyArborist/why-ryan-banksy" element={<WhyRyanBanksy />} />
            <Route path="/RyanBanksyArborist/insurance" element={<Insurance />} />
            <Route path="/RyanBanksyArborist/safety" element={<Safety />} />
            <Route path="/RyanBanksyArborist/certifications" element={<Certifications />} />
            <Route path="/RyanBanksyArborist/civic-affiliations" element={<CivicAffiliations />} />
            <Route path="/RyanBanksyArborist/contact" element={<Contact />} />
            <Route path="/RyanBanksyArborist/testimonials" element={<Testimonials />} />
            <Route path="/RyanBanksyArborist/contractors" element={<Contractors />} />
            <Route path="/RyanBanksyArborist/coupon" element={<Coupon />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
