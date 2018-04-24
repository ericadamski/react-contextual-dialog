import React from "react";
import styled from "styled-components";

import colors from "./utils/colors";

const Wrapper = styled.main`
  box-sizing: border-box;
  background-color: ${colors.green.normal};
  height: inherit;
  width: inherit;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const Body = styled.main`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  height: 40%;

  ${Body} {
    display: inline-block;
    width: auto;
  }
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  color: ${colors.black.normal};
  transition: 0.2s ease;
  text-shadow: 0 0 transparent;

  &:hover {
    transform: translateY(-5px);
    text-shadow: 0 5px ${colors.blue.normal};
  }
`;

const Header = styled.header`
  width: 100%;
  height: 40%
  display: flex;
  flex-wrap: nowrap;

  ${Body} {
    display: inline-block;
    text-align: right;
    ${Link} {
      font-size: 2.5rem;
    }
  }
`;

const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 2.5rem;
  line-height: 1;
  word-spacing: 200rem;
`;

const Page = ({ className, children }) => (
  <Wrapper>
    <Header>
      <Title>Contextual Dialog</Title>
      <Body>
        <Link href="//github.com/ericadamski/react-contextual-dialog">
          <span role="img" aria-label="github" className="ion-social-github" />
        </Link>
      </Body>
    </Header>
    <Body>{children}</Body>
    <Footer>
      <Body>
        Made with{" "}
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>{" "}
        by <Link href="//twitter.com/zealigan">Eric</Link>
      </Body>
    </Footer>
  </Wrapper>
);

export default Page;
