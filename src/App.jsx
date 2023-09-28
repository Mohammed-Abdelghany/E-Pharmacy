import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='stock' element={<Dashboard />} />
        <Route path='patients' element={<Dashboard />} />
        <Route path='reports' element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
