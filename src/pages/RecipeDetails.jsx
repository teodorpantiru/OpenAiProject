import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function RecipeDetails({ food }) {
  // const { title, preptime, ingredients } = food;
  const recipe = food?.recipe;

  console.log(recipe, "RecipeDetails food");

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-semibold mb-4">{recipe?.title}</h1>
      <p className="leading-loose mb-6">{recipe?.title}</p>
      <ul>
        {recipe?.ingredients?.map((ingredient) => {
          return (
            <li key={ingredient} className="mb-4 bg-base-100 p-4 rounded-xl">
              <p>{ingredient}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
