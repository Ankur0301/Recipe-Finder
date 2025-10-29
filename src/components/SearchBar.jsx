export default function SearchBar({ ingredient, setIngredient, fetchRecipes }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row justify-center gap-3 mb-6 w-full max-w-md mx-auto"
    >
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter an ingredient (e.g. chicken, egg)..."
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
      />
      <button
        type="submit"
        className="bg-transparent border border-white text-white px-4 py-2 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
