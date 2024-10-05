import React from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function RelatedRecipe({ relatedRecipe, setShowRelatedRecipe }) {
  // console.log(recipe)
  return (
    <>
      <div className="p-4">
        <div className="flex justify-start w-full md:w-[50%] m-auto">
          <button
            onClick={() => setShowRelatedRecipe(false)}
            className="flex justify-center text-lg items-center mb-4 mt-10 px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        </div>

        <div className="flex flex-col lg:flex-row justify-center w-full mt-10">
          <div className="flex flex-col justify-start items-center w-full lg:w-[25%] mb-10 lg:mb-0">
            <div className="bg-gray-100 w-full max-w-[400px] h-[300px] md:h-[400px]">
              <img
                src="/path-to-your-image"
                alt="Recipe Image"
                className="w-full h-full object-cover border"
              />
            </div>
            <div>
              <p>{relatedRecipe.title}</p>
              <p>{relatedRecipe.cook_time}</p>
            </div>
          </div>

          <div className="w-full lg:w-[25%]">
            <div className="mb-5 p-5"></div>
            <div className="p-5">
              <h1 className="text-2xl font-semibold pb-2">Instructions</h1>
              {relatedRecipe.ingredients.map((ingredient) => {
                return <p>{ingredient}</p>;
              })}
              <div className=" mt-10 ">
                {relatedRecipe.instructions.map((instruction) => {
                  return (
                    <p className="mb-4">
                      Step {instruction.step}: {instruction.description}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
