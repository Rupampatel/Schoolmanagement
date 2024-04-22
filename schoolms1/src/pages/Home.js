import React from "react";

const Home = () => {
  return (
    <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll mt-2 p-6 lg:overflow-visible bg-gray-300">
      <h1 className="text-3xl font-bold mb-4"> WELCOME TO OUR SCHOOL</h1>
      <img
        class="bg-cover bg-center h-96 w-full"
        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pataskala_Elementary_School.jpg"
        alt="slimg"
      />
      <h2 className="text-2xl font-bold mb-4"> Toppers of our school</h2>
      <marquee bgcolor="#ccc" loop="-1" scrollamout="5" width="100%">
        <span className=" font-semibold">
          Student of the year of our shool is-
        </span>
        <sup className="text-red-500 font-bold text-lg"> * Rupam Patel * </sup>
        <span className=" font-semibold">
          topper in compurt Science department with agrigiate of 99%
        </span>
      </marquee>
      <img
        class=" h-[200px] w-[250px]"
        src=" https://i1.rgstatic.net/ii/profile.image/933947840163840-1599681925857_Q512/Aleksandra-Tyc.jpg"
        alt="topper"
      />
      <span>(Student of the year)</span>
    </div>
  );
};

export default Home;
