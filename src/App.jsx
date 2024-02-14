import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Services from "./Component/Services/Services";
import Blog from "./Component/Blog/Blog";
import ContactUs from "./Component/ContactUs/ContactUs";
import Pricing from "./Component/Pricing/Pricing";
import Home from "./Component/Home/Home";
import AboutUs from "./Component/AboutUs/AboutUs";
import Footer from "./Component/Footer/Footer";
import Layout from "./Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
      
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer  />
    </>
  );
}

export default App;
