import React from "react";

const Addmision = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg bg-gray-300 mt-3">
      <h2 className="text-2xl font-bold mb-4">Admission Information</h2>
      <p className="text-lg mb-4">
        We are currently accepting applications for the upcoming academic year.
        Here are some key details:
      </p>
      <ul className="list-disc ml-6">
        <li className="text-lg mb-2">Admission Deadline: May 31, 2024</li>
        <li className="text-lg mb-2">
          Application Requirements:
          <ul className="list-disc ml-6">
            <li className="text-lg">Completed application form</li>
            <li className="text-lg">Transcripts from previous schools</li>
            <li className="text-lg">Letter of recommendation</li>
          </ul>
        </li>
        <li className="text-lg mb-2">Admission Test Dates: June 15-30, 2024</li>
        <li className="text-lg mb-2">
          For more information, please contact our admission office.
        </li>
      </ul>
    </div>
  );
};

export default Addmision;
