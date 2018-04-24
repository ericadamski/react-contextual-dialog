import React from "react";
import styled from "styled-components";

import Button from "./button";
import colors from "./utils/colors";

const Header = styled.div`
  background-color: ${colors.black.normal}0f;
`;
const Body = styled.div``;
const Content = styled.p``;
const Title = styled.h2`
  padding: 0;
  margin: 0;
`;
const Footer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: ${colors.black.normal}e0;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  min-width: 50vw;

  ${Footer}, ${Header}, ${Body} {
    padding: 1rem 1.5rem;
  }
`;

const Container = styled.div`
  position: relative;
  max-width: 90vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white.normal};
  border-radius: 3px;

  @media (min-width: 800px) {
    max-width: 60vw;
  }
`;

const Dialog = ({ close, isOpen, title, content }) =>
  isOpen ? (
    <Wrapper role="dialog" aria-labelledby="dialog-title">
      <Container>
        <Header>
          <Title>{title}</Title>
        </Header>
        <Body>
          <Content>{content}</Content>
        </Body>
        <Footer>
          <Button onClick={close}>Close</Button>
        </Footer>
      </Container>
      <Overlay onClick={close} />
    </Wrapper>
  ) : null;

export default Dialog;
