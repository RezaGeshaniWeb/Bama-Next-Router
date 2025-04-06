import AllButton from "./components/modules/AllButton";
import Categories from "./components/modules/Categories";
import SearchBar from "./components/modules/SearchBar";
import CarsPage from "./components/templates/CarsPage";
import carsData from "./data/carsData";

export default function Home() {
  const cars = carsData.slice(0, 3)

  return (
    <section>
      <SearchBar />
      <Categories />
      <AllButton />
      <CarsPage data={cars} />
    </section>
  )
}