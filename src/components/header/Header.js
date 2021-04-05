import React from "react";
import {
  HeaderContainer,
  NameContainer,
  PageLink,
  PageOptionsContainer,
} from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <NameContainer to="/">Julia Medina</NameContainer>
      <PageOptionsContainer>
        <PageLink to="/projects">PROJECTS</PageLink>
        <PageLink to="/about">ABOUT</PageLink>
        <PageLink to="/contact">CONTACT</PageLink>
      </PageOptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
