import styled from "styled-components";

const Header = () => {
  return <HeaderWrapper>🌱새싹 웹팟🌱</HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
  color: white;
  background-color: #e9e3f8;
`;
