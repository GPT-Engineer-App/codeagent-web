import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AgentFramework from "./pages/AgentFramework.jsx"; // Import the new AgentFramework component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/agent-framework" element={<AgentFramework />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;