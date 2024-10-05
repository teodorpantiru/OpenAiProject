import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import NewTourPage from "./SearchBar";
import GenerateRecipe from "./GenerateRecipe";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function MainComp() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="flex flex-col justify-center ">
        <div className="flex flex-col  h-screen">
          <GenerateRecipe />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default MainComp;
