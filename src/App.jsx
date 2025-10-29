import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RecipePage from "./pages/RecipePage";
import RecipeDetails from "./pages/RecipeDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recipes" element={<RecipePage />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
}
