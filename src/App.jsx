import React from "react";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  HomeIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-blue-50 p-6">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl text-cyan-800 font-bold text-center mb-12">
          Micro Finance System
        </h1>

        {/* Options Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Home Loan */}
          <div
            className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-cyan-200 hover:scale-105 transition-transform duration-300 border border-gray-100 cursor-pointer flex flex-col items-center gap-4"
            onClick={() => navigate("/homeLoan")}
          >
            <HomeIcon className="h-12 w-12 text-cyan-500 group-hover:text-cyan-700 transition-colors duration-300 mb-2" />
            <h2 className="text-2xl font-bold text-cyan-800 mb-2 text-center">
              Home Loan
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Secure your dream home with our easy and affordable home loan
              options.
            </p>
          </div>

          {/* Wedding Loan */}
          <div
            className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-pink-200 hover:scale-105 transition-transform duration-300 border border-gray-100 cursor-pointer flex flex-col items-center gap-4"
            onClick={() => navigate("/weddingLoan")}
          >
            <HeartIcon className="h-12 w-12 text-pink-400 group-hover:text-pink-600 transition-colors duration-300 mb-2" />
            <h2 className="text-2xl font-bold text-cyan-800 mb-2 text-center">
              Wedding Loan
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Plan your perfect wedding with flexible loan packages tailored for
              you.
            </p>
          </div>

          {/* Education Loan */}
          <div
            className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-blue-200 hover:scale-105 transition-transform duration-300 border border-gray-100 cursor-pointer flex flex-col items-center gap-4"
            onClick={() => navigate("/education")}
          >
            <AcademicCapIcon className="h-12 w-12 text-blue-400 group-hover:text-blue-600 transition-colors duration-300 mb-2" />
            <h2 className="text-2xl font-bold text-cyan-800 mb-2 text-center">
              Education Loan
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Achieve your educational goals with our hassle-free loan services.
            </p>
          </div>

          {/* Business Loan */}
          <div
            className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-amber-200 hover:scale-105 transition-transform duration-300 border border-gray-100 cursor-pointer flex flex-col items-center gap-4"
            onClick={() => navigate("/bussnisLoan")}
          >
            <BriefcaseIcon className="h-12 w-12 text-amber-400 group-hover:text-amber-600 transition-colors duration-300 mb-2" />
            <h2 className="text-2xl font-bold text-cyan-800 mb-2 text-center">
              Business Loan
            </h2>
            <p className="text-sm text-gray-600 text-center">
              Expand your business with our affordable and flexible business
              loan plans.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
