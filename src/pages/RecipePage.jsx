import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";

export default function RecipePage() {
  const [ingredient, setIngredient] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    if (!ingredient) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (err) {
      console.error("Error fetching recipes:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-6 pt-14 pb-10 relative"
      style={{
        backgroundImage: "url('/food4.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 text-white cursor-default">
          Find Your Perfect Recipe
        </h1>

        <SearchBar
          ingredient={ingredient}
          setIngredient={setIngredient}
          fetchRecipes={fetchRecipes}
        />

        {loading ? (
          <p className="text-center mt-6 text-white">Loading recipes...</p>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </div>
    </div>
  );
}
