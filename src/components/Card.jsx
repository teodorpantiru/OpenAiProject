import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Card({
  id,
  title,
  time,
  image,
  setShowRelatedRecipe,
  setRelatedRecipe,
  item,
}) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedStatus = JSON.parse(localStorage.getItem(`recipe-${id}`));
    if (savedStatus) {
      setIsSaved(savedStatus);
    }
  }, [id]);

  const toggleSave = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking on the heart icon
    const newSavedStatus = !isSaved;
    setIsSaved(newSavedStatus);
    localStorage.setItem(`recipe-${id}`, JSON.stringify(newSavedStatus));
  };

  return (
    <div className="flex flex-row mt-5 h-auto md:h-[115px] shadow-lg rounded-xl bg-white">
      <div
        onClick={() => {
          setShowRelatedRecipe(true);
          setRelatedRecipe(item);
        }}
        className="flex w-[30%] md:w-[20%] bg-gray-600 bg-cover rounded-l-xl overflow-hidden"
      >
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="w-[70%] md:w-[65%] pl-4 bg-white">
        <h2 className="text-lg md:text-xl font-semibold mb-2 mt-3">{title}</h2>
        <p className="font-semibold">{time}</p>
      </div>

      <div className="flex justify-center items-center m-auto text-customPurple mr-6">
        {isSaved ? (
          <FaHeart
            className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
            onClick={toggleSave}
          />
        ) : (
          <FaRegHeart
            className="h-6 w-6 md:h-8 md:w-8 cursor-pointer"
            onClick={toggleSave}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
