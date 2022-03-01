// import logo from "assets/images/logo.png";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../../assets/images/logo.png";
import { Container } from "../../../styles/GlobalStyles";
import {
  HeaderComponent,
  HeaderWrapper,
  Input,
  InputWrapper,
  Logo,
  SearchButton,
} from "../../../styles/Header.styles";

export function Header() {
  return (
    <HeaderComponent>
      <Container>
        <HeaderWrapper>
          <div>
            <Logo src={logo} alt=""></Logo>
          </div>
          <InputWrapper>
            <Input type="text" />
            <SearchButton>
              <AiOutlineSearch />
            </SearchButton>
          </InputWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderComponent>
  );
}
