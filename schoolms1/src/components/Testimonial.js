import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 < 0) setIndex(reviews.length - 1);
    else setIndex(index - 1);
  }
  function rightShiftHandler() {
    if (index + 1 > reviews.length - 1) setIndex(0);
    else setIndex(index + 1);
  }

  return (
    <div
      className="w-[185vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10
    transition-all duration-700 hover:shadow-xl rounded-md"
    >
      <Card review={reviews[index]}></Card>
      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button
          onClick={leftShiftHandler}
          className="curser-pointer:hover text-violet-500"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="curser-pointer:hover text-violet-500"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Testimonial;
