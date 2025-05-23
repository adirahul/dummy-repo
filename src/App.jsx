import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";
import ComponentWithBackgroundImage from "./components/ComponentWithBackgroundImage";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getProductsFromTMDBapi = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=1344e062639dff0545ba31f3c5040030`
      );
      setProducts(data.results);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsFromTMDBapi();
  }, []);
  return (
    <>
      <Header />
      <ComponentWithBackgroundImage />

      <Tabs />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={`https://image.tmdb.org/t/p/w185` + product.poster_path}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <p className="text-sm font-medium text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque optio magnam amet, iure obcaecati est alias,
                  perspiciatis ex veniam vel impedit incidunt reiciendis modi
                  esse cupiditate aspernatur, voluptatibus ratione repellendus?
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
