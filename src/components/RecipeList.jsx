import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }) {
  if (!recipes.length)
    return (
      <p className="text-center text-white cursor-default">
        No recipes found. Try another ingredient!
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}
