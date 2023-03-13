// IMPORT
// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// END DEPENDENCIES
// PAGES
import Test from "../pages/test/Test";
// END PAGES
// END IMPORT

export const NoLogin = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="*" element={<Test />} />
      </Routes>
    </Router>
  );
};
