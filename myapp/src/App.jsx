import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main id="home">
        <Gallery />
      </main>

      <Footer />
    </>
  );
}

export default App;