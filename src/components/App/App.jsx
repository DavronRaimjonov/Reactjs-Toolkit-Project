import { Route, Routes } from "react-router-dom";
import { Home, Registr, Login } from "../";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
