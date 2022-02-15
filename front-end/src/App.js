import { Routes, Route } from "react-router-dom";
// import NavBar from "./Components/Common/NavBar";
import AllSnacks from "./Components/AllSnacks";
// import SnackDetail from "./Components/SnackDetail";
// import NewSnack from "./Components/NewSnack";
import SnackEdit from "./Components/SnackEdit";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<h2>Hello, world!</h2>} />
        <Route path="/snacks" element={<AllSnacks />} />
        {/* <Route path="/snacks/:id" element={<SnackDetail/>}/> */}
        {/* <Route path="/snacks/new" element={<NewSnack/>}/> */}
        <Route path="/:id/edit" element={<SnackEdit />} />
      </Routes>
    </div>
  );
}

export default App;
