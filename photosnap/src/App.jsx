// import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stories from "./pages/Stories";

function App() {
  // const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Header />

      <main>
        {/* TEST */}
        {/* <Home /> */}
        <Stories />
      </main>

      <Footer />
    </>
  )
}

export default App;
