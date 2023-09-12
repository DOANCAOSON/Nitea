import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./page/Home";
import ScrollToTop from "./component/ScrollToTop";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./page/Detail";
import Tramtintuc from "./page/Tramtintuc";
import Payment from "./page/Payment";
import Test from "./page/Test";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/tramtintuc"
          element={<Tramtintuc />}
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
