import Header from "./Header";
import Fortune from "./Fortune";
import Footer from "./Footer";
import Hero from "./Hero";
import HelloWorldPortfolioCard from "./HelloWoldPortfolioCard";
import PotterHousePortfolioCard from "./PotterHousePortfolioCard";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero /> Airplane Window
      <p>My birthday is November 24, 1985.</p>
      <p>This will be my main project and portfolio for this course </p>
      <Fortune />
      <HelloWorldPortfolioCard />
      <PotterHousePortfolioCard />
      <Footer />
    </div>
  );
}

export default App;
