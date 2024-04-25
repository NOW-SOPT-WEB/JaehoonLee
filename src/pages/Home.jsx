import { useNavigate, Link, useLocation } from "react-router-dom";

import Header from "../components/Header";
import styled from "styled-components";
import TypeA from "./TypeA";
import TypeB from "./TypeB";
import { Outlet } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  return (
    <HomeWrapper>
      <Header />
      <ButtonWrapper>
        <NavigateBtn onClick={() => navigate("/login")}>
          로그인 페이지로 이동
        </NavigateBtn>
        <NavigateBtn onClick={() => navigate("/post-detail/1")}>
          post-detail 페이지로 이동
        </NavigateBtn>
      </ButtonWrapper>
      <Link to="/login">로그인으로 가자</Link>
      <Outlet></Outlet>
    </HomeWrapper>
  );
};

export default Home;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const NavigateBtn = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 8px;
  cursor: pointer;
`;
