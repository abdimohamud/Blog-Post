import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import LandingPage from "./components/pages/LandingPage";
import OverviewPage from "./components/pages/OverviewPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import BlogPage from "./components/pages/BlogPage";

import Blockers from "./components/pages/Overview/Blockers";
import ArtDesign from "./components/pages/Overview/ArtDesign";
import Contributions from "./components/pages/Overview/Contributions";
import FamilyPromise from "./components/pages/Overview/FamilyPromise";
import Product from "./components/pages/Overview/Product";
import ProductRoadMap from "./components/pages/Overview/ProductRoadMap";
import UserFlow from "./components/pages/Overview/UserFlow";
import FinalResult from "./components/pages/Overview/FinalResult";
import LabsReflection from "./components/pages/Blog/LabsReflection";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/overview/final-result">
          <FinalResult />
        </Route>
        <Route path="/overview/blockers">
          <Blockers />
        </Route>
        <Route path="/overview/userflow">
          <UserFlow />
        </Route>
        <Route path="/overview/art-design">
          <ArtDesign />
        </Route>
        <Route path="/overview/contributions">
          <Contributions />
        </Route>
        <Route path="/overview/family-promise">
          <FamilyPromise />
        </Route>
        <Route path="/overview/product">
          <Product />
        </Route>
        <Route path="/overview/product-roadmap">
          <ProductRoadMap />
        </Route>
        <Route path="/overview/userflow">
          <UserFlow />
        </Route>
        <Route path="/overview">
          <OverviewPage />
        </Route>
        <Route path="/blog/labs-reflection">
          <LabsReflection />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
