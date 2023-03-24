import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Deserts from "./Components/Deserts";
import Navbar from "./Components/Navbar";
import RecipeDetail from "./Components/RecipeDetail";
import Vegetarians from "./Components/Vegetarians";
import Veggie from "./Components/Veggie";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Recipes from "./Pages/Recipes";
import { routes } from "./routes";

function App() {
  // Momentaneamente va a ir aca lo de la api (no es optimo)
  const [recipes, setRecipes] = useState([]);
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=68d481a0fbc340308fbf934f836ee8c6";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  console.log(recipes);

  return (
    <div className="App">
      <Navbar />
      <Routes>

        {/* Anidamos rutas */}
        <Route path={routes.home} element={<Home />}>
          <Route path="/vegetarianas" element={<Vegetarians />}>
            <Route path="/vegetarianas/veggie" element={<Veggie />} />
          </Route>
          <Route path="/postres" element={<Deserts />} />
        </Route>
        
        <Route path={routes.recipes} element={<Recipes recipes={recipes} />} />

        {/* Ingresar a recipes y al id de ese recipe */}
        {/* Los 2 puntos son xq cuando voy a RecipeDetail utilizo el hook useParams,
        va a ver el objeto dsp de los 2 puntos y lo va nombra en este como "id", "otraCosa" */}
        <Route
          path="/recipe/:id"
          element={<RecipeDetail recipes={recipes} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;