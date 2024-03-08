import "./App.css";
import { BrowserRouter as R, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Sign from "./Sign";
import Admin from "./Admin";
import Contact from "./Contact";
import About from "./About";
import Adminlogin from "./Adminlogin";
import Shopadd from "./Shopadd";
import Shopedit from "./Shopedit";
import Shopremove from "./Shopremove";
import Response from "./Response";
import Shopaddpage from "./Shopaddpage";
function App() {
  return (
    <>
      <R>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Sign" element={<Sign />} />
          <Route path="/Adminlogin" element={<Adminlogin />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/Shopadd" element={<Shopadd />}></Route>
          <Route path="/Shopedit" element={<Shopedit />}></Route>
          <Route path="/Shopremove" element={<Shopremove />}></Route>
          <Route path="/Response" element={<Response />}></Route>
          <Route path="/Shopaddpage" element={<Shopaddpage />}></Route>
          {/* <Route path="*" element={<empty/>}></Route> */}
        </Routes>
      </R>
    </>
  );
}

export default App;
