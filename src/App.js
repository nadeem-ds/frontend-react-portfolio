import "./App.css";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
function App() {
  return (
    <div className="app">
      <h1>Nadeem ANwar personal portfolio </h1>
      <Navbar />
      <About />
      <Footer />
      <Header />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  );
}

export default App;
