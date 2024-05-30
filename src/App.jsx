import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ApiSettings from "./pages/ApiSettings.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/api-settings" element={<ApiSettings />} />
      </Routes>
    </Router>
  );
}

export default App;