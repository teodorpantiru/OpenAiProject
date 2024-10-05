"use server";

import { CiSearch } from "react-icons/ci";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getExistingRecipe,
  generateRecipeResponse,
  createNewRecipe,
} from "../services/actions.js";

import toast from "react-hot-toast";
import RecipeDetails from "../pages/RecipeDetails.jsx";
import Favorites from "./Favorites.jsx";
import { useState } from "react";
import RelatedRecipe from "../pages/RelatedRecipe.jsx";
import Spinner from "./Spinner.jsx";

function SearchBar() {
  const {
    mutate,
    isLoading,
    data: food,
  } = useMutation({
    mutationFn: async (foodRecipe) => {
      const searchBar = await generateRecipeResponse(foodRecipe.food);
      // console.log(foodRecipe);

      if (searchBar) {
        return searchBar;
      }
      toast.error("No matching food name found...");
      return null;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const foodRecipe = Object.fromEntries(formData.entries());
    mutate(foodRecipe);
  };
  console.log(food, "FoodData");

  const [searchTerm, setSearchTerm] = useState("");
  const [showRelatedRecipe, setShowRelatedRecipe] = useState(false);
  const [relatedRecipe, setRelatedRecipe] = useState(null);
  console.log(showRelatedRecipe, "showRelatedRecipe");
  console.log(relatedRecipe, "relatedRecipe");

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" mt-10 ml-auto mr-auto w-[95%] sm:w-[95%] md:w-[55%] lg-w-[40%] 3xl:w-[30%] 4xl:w-[40%]"
      >
        <div></div>
        <div className=" flex flex-row justify-center items-center  join w-full space-x-4">
          <input
            type="text"
            className="input input-bordered join-item w-full pl-4 pr-4 pt-2 pb-2 rounded-full  "
            placeholder="Search what you want to eat..."
            name="food"
            required
          />
          <button
            className="ml-5 py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-300 hover:text-black focus:bg-gray-500 focus:text-white whitespace-nowrap"
            type="submit"
          >
            Find Recipe
          </button>
        </div>
      </form>

      {/* Display spinner while loading */}
      <div className="mt-7">{isLoading && <Spinner />}</div>

      <div className="mt-16 ">
        {showRelatedRecipe ? (
          <RelatedRecipe
            relatedRecipe={relatedRecipe}
            setShowRelatedRecipe={setShowRelatedRecipe}
          />
        ) : (
          <>
            {/* <RecipeDetails food={food} /> */}
            <Favorites
              food={food}
              searchTerm={searchTerm}
              setShowRelatedRecipe={setShowRelatedRecipe}
              setRelatedRecipe={setRelatedRecipe}
            />
          </>
        )}
      </div>
    </>
  );
}

export default SearchBar;
