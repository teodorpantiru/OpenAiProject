import { dehydrate, Hydrate, QueryClient } from "@tanstack/react-query";
import RecipeDetails from "../pages/RecipeDetails";
import SearchBar from "./SearchBar";

const queryClient = new QueryClient();

const GenerateRecipe = () => {
  return (
    <Hydrate state={dehydrate(queryClient)}>
      <SearchBar />
    </Hydrate>
  );
};

export default GenerateRecipe;
