import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setMeal(data.meals[0]);
    };

    fetchRecipe();
  }, [id]);

  if (!meal)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black/30 text-white">
        <p className="text-lg">Loading recipe...</p>
      </div>
    );

  // Extract ingredients
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-start py-10 px-5"
      style={{
        backgroundImage: "url('/food4.jpg')",
      }}
    >
      <div className="bg-black/50 backdrop-blur-sm text-white p-6 sm:p-10 rounded-2xl shadow-2xl max-w-4xl w-full">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full sm:w-4/5 lg:w-3/5 mx-auto rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
        />

        <h1 className="text-3xl sm:text-4xl mt-6 text-center">
          {meal.strMeal}
        </h1>

        <p className="mt-2 text-gray-200 text-center text-sm sm:text-base">
          {meal.strCategory} | {meal.strArea}
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-gray-100">
            {ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="mt-2 whitespace-pre-line leading-relaxed text-gray-100">
            {meal.strInstructions}
          </p>
        </div>

        {meal.strYoutube && (
          <div className="text-center">
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block px-6 py-3 text-white rounded-lg
               hover:bg-red-500/20 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Watch on YouTube
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
