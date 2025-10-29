import { useNavigate } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
      className="cursor-pointer rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
      />
      <h2 className="text-lg text-white text-center p-4">{recipe.strMeal}</h2>
    </div>
  );
}
