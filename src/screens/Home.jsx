import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Flooting  from "../components/Flooting";

import Card from "../components/Card";
export default function Home() {
  return (
    <div className="bg-gray-400 h-screen">
      <div>
        <Navbar />
      </div>
      <div>
        <Flooting/>
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
