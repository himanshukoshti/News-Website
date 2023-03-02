import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import OtherNews from './Components/OtherNews/OtherNews';
import NewsMain from './Components/NewsPage/NewsMain';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/news/:id" element={<NewsMain />} />
          <Route path="/" element={<><Banner/><OtherNews/></>} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
