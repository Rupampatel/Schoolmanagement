import React from "react";

const Ourteam = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-4 py-8 bg-gray-300 mt-3">
        <h2 className="text-3xl font-bold mb-4">Leader of our school</h2>
        <div className="flex items-center mb-8">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg"
            alt="Principal"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">Principal</h3>
            <p className="text-lg">John Doe</p>
            <p className="text-lg">Principal, Our School</p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="https://www.randomlists.com/img/people/arnold_schwarzenegger.jpg"
            alt="Director"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-bold mb-2">Director</h3>
            <p className="text-lg">Jane Smith</p>
            <p className="text-lg">Director, Our School</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
