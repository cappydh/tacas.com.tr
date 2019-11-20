import React from "react";
import Header from "./Header";
import Information from "./Information";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Information />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
