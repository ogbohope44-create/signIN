import React, { useState } from "react";
import SignIn1 from "./components/signIn1";
import SignIn2 from "./components/signIn2";
import Herosection from "./components/screens/Herosection";
import Herosection2 from "./components/screens/Herosection2";

function App() {
  const [currentPage, setCurrentPage] = useState("signin1");

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="flex flex-col gap-4 p-6 w-52">
        <button
          onClick={() => setCurrentPage("signin1")}
          className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Sign In 1
        </button>

        <button
          onClick={() => setCurrentPage("signin2")}
          className="px-4 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
        >
          Sign In 2
        </button>

        <button
          onClick={() => setCurrentPage("hero")}
          className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Hero Section
        </button>

        <button
          onClick={() => setCurrentPage("hero")}
          className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Hero Section2
        </button>
      </div>

      {/* Display Selected Page */}
      {currentPage === "signin1" && <SignIn1 />}
      {currentPage === "signin2" && <SignIn2 />}
      {currentPage === "hero" && <Herosection />} 
      {currentPage === "hero2" && <Herosection2 />} 

    </div>
  );
} 

export default App;