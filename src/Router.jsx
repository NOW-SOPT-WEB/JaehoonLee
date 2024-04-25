import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";

import TypeA from "./pages/TypeA";
import TypeB from "./pages/TypeB";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/type-a" element={<TypeA></TypeA>}></Route>
          <Route path="/type-b" element={<TypeB></TypeB>}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/post-detail/:postId" element={<PostDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
