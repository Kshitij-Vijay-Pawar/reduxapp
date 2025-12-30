import { Route, Routes } from "react-router";
import HomePage from "./pages/Home";
import CollectionPage from "./pages/Collection";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path=":pid" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
