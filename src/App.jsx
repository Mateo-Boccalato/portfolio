import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NotFound } from "./pages/NotFound.jsx"; // Importing the NotFound component


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} /> // to handle all the routes that are not defined
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
