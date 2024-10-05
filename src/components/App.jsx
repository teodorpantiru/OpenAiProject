import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainComp from "./MainComp";
import PageNotFound from "../pages/PageNotFound";
import RecipeDetails from "../pages/RecipeDetails";
import AppLayout from "./AppLayout";
import RelatedRecipe from "../pages/RelatedRecipe";

function App() {
  return (
    // overflow-y-hidden
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="mainComp" />} />
            <Route path="mainComp" element={<MainComp />} />
            <Route path="recipeDetails" element={<RecipeDetails />} />
            <Route path="relatedRecipe" element={<RelatedRecipe />}></Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
