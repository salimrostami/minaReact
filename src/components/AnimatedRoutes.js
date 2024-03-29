import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Publications from "../pages/publications/Publications";
import Contact from "../pages/contact/Contact";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <Landing
            name={personalDetails.name}
            tagline={personalDetails.tagline}
          />
        }
      />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            affiliation={personalDetails.affiliation}
            brand={personalDetails.brand}
            intro={personalDetails.intro}
            birthday={personalDetails.birthday}
            language={personalDetails.language}
          />
        }
      />
      <Route path="/publications" element={<Publications />} />
      <Route
        path="/contact"
        element={
          <Contact
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
          />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
