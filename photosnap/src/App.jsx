// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Features from "./pages/Features";

function App() {
  // const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Header />

      <main>

        {/* <Home /> */}
        {/* <Stories /> */}
        <Features />

      </main>

      <Footer />
    </>
  )
}

export default App;
