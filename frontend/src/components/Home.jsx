import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grow px-4 h-full flex justify-center items-center">
      <main className="w-full h-full flex flex-col justify-center items-center">
        <h4 className="text-xl md:text-2xl lg:text-3xl mb-4 text-center">
          Managing your daily tasks have never been this easy before!
        </h4>
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-gradient font-bold uppercase text-center">
          Easy Todo Management
        </h2>
        <p className="text-center max-w-5xl mt-3 text-base md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          perferendis recusandae iste nemo illum possimus, tenetur
          exercitationem ipsum officia, quibusdam non dolor vitae sed adipisci
          unde reprehenderit illo reiciendis aut.
        </p>
        <Link to="/login">
          <button className="bg-blue-700 py-4 px-8 text-base text-white rounded-md shadow-md hover:bg-blue-600 mt-6">
            Get Started
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Home;
