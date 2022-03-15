// import logo from "assets/images/logo.png";
import logo from "assets/images/logo.png";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Container } from "styles/GlobalStyles";
import {
  HeaderComponent,
  HeaderWrapper,
  Input,
  InputWrapper,
  Logo,
  SearchButton,
} from "styles/Header.styles";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderComponent>
      <Container>
        <HeaderWrapper>
          <div>
            <Logo
              onClick={() => {
                navigate("/");
              }}
              src={logo}
              alt=""
            ></Logo>
          </div>
          <InputWrapper>
            <Input
              transition={{ type: "spring", stiffness: 300 }}
              whileFocus={{ width: "50%" }}
              type="text"
              placeholder="enter search text"
            />
            <SearchButton>
              <AiOutlineSearch />
            </SearchButton>
          </InputWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderComponent>
  );
};
export default Header;
