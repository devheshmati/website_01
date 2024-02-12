import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./assets/pages/homePage";
import BlogsPage from "./assets/pages/blogsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />}/>
          <Route path="blogs/" element={<BlogsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
