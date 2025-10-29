import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-6 pt-14 pb-10 relative"
      style={{
        backgroundImage: "url('/food13.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-6xl mb-4 drop-shadow-lg">Recipe Finder</h1>
        <p className="text-2xl text-white/90 mb-8">
          Craving something delicious? Just tell us what ingredients you have,
          and we’ll find the perfect recipes for you. Quick, easy, and fun..!!
        </p>
        <button
          onClick={() => navigate("/recipes")}
          className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
        >
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-15">
        <img
          src="/food5.jpg"
          alt="Dish 1"
          className="rounded-xl shadow-lg w-80 h-80 object-cover hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/food7.jpg"
          alt="Dish 2"
          className="rounded-xl shadow-lg w-80 h-80 object-cover hover:scale-105 transition-transform duration-300"
        />
        <img
          src="/food9.jpg"
          alt="Dish 3"
          className="rounded-xl shadow-lg w-80 h-80 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
