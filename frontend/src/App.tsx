import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import LayoutHome from "./layouts/layoutHome";

function App() {
  const listMenuHome = [
    {
      path: "/",
      element: <LoginPage />,
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutHome />}>
          {listMenuHome.map((data, key) => (
            <Route path={data.path} element={data.element} key={key} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
