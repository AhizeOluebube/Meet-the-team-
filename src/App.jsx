import "./App.css";
import Team from "./pages/Team";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Team />
      <Footer />
    </>
  );
}

export default App;
