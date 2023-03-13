// IMPORT
// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Toolbar from "../components/Toolbar";
// END DEPENDENCIES
// PAGES
import Home from "../pages/home/Home";
import Test from "../pages/test/Test";

// END PAGES
// END IMPORT

export const Login = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Toolbar />
      <Routes>
        <Route
          path="/desert"
          element={<Home list={["76561198813506766", "76561197976980898"]} />}
        />
        <Route path="/teste/:appid" element={<Test />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};
