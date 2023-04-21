import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayoutPage from "./components/layout";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Router>
        <Routes>
          <Route path="*" element={<LayoutPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
