import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getFoodItems } from "../services/api.FoodItems";
import Spinner from "./Spinner";

function Favorites({
  searchTerm,
  food,
  setShowRelatedRecipe,
  setRelatedRecipe,
}) {
  const {
    isLoading,
    data: foodItems,
    error,
  } = useQuery({
    queryKey: ["FoodItems"],
    queryFn: getFoodItems,
  });

  const relatedRecipes = food?.related_recipes;
  if (isLoading) return <Spinner />;

  const filteredItems = relatedRecipes?.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" flex flex-col justify-start items-center w-[95%] sm:w-[95%] md:w-[55%] lg-w-[40%] 3xl:w-[30%] 4xl:w-[40%]  ml-auto mr-auto">
      {/* Header Section */}
      <div className="mr-auto  pb-2 ">
        <h1 className="text-2xl md:text-4xl font-semibold">Favorites</h1>
      </div>

      <div className="flex flex-col justify-start w-full h-[695px]">
        <div className="w-full  h-full max-h-full overflow-y-auto scrollbar-hide pb-[50px]">
          {filteredItems?.length > 0 ? (
            relatedRecipes?.map((item) => (
              <Card
                setShowRelatedRecipe={setShowRelatedRecipe}
                setRelatedRecipe={setRelatedRecipe}
                item={item}
                key={item.id}
                id={item.id}
                title={item.title}
                time={`${item.prep_time}`}
                image={item.image}
              />
            ))
          ) : (
            <p>No recipes found for "{searchTerm}".</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
