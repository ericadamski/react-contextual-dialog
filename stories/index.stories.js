import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { range } from 'ramda';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ContextualDialog from '../src';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 60%;
  width: 100%;
  overflow: hidden;
  border-radius: 3px;
  box-shadow: 0 -2px 25px 0 rgba(0, 0, 0, 0.15),
    0 13px 25px 0 rgba(0, 0, 0, 0.3);

  margin: 5rem;

  background-color: #fafafa;
`;

const Page = styled.main`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100vw;
  max-height: 100vh;
  font-family: 'Roboto', sans-serif;

  background-color: #b6f9c9;
  color: #7c7c7c;
`;

const Title = styled.h2`
  padding: 0;
  margin: 0;
  color: grey;
`;

const Header = styled.header`
  display: flex;
  background: #0a0a0a0f;
  padding: 0.25rem 1rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  flex-wrap: nowrap;
  padding: 0.25rem 1rem;
`;

const Body = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  min-height: 5rem;
`;

const Button = styled.button`
  border: none;
  background: none;
  height: 2rem;
  transition-property: background-color;
  transition: 0.2s ease;
  border-radius: 3px;

  &:hover {
    background-color: #0a0a0a0f;
    cursor: pointer;
  }
`;

class SimpleDialog extends Component {
  open() {
    this.props.open();
  }

  render() {
    const { close, isOpen } = this.props;

    return (
      <div>
        {isOpen && (
          <Wrapper>
            <Header>
              <Title>Nested!</Title>
            </Header>
            <Body>
              <Button onClick={close}>Close the inner dialog</Button>
            </Body>
          </Wrapper>
        )}
      </div>
    );
  }
}

class DialogExample extends Component {
  componentDidMount() {
    this.props.startOpen && this.props.open();
  }

  render() {
    return (
      <Fragment>
        {!this.props.isOpen && <Button onClick={this.props.open}>Open</Button>}
        {this.props.isOpen && (
          <Wrapper>
            <Header>
              <Title>Title</Title>
            </Header>
            <Body>
              Hello This is the Body
              <Button onClick={e => this.innerDialog.open(e)}>
                Open Another Dialog
              </Button>
              <ContextualDialog.Dialog>
                <SimpleDialog ref={n => (this.innerDialog = n)} />
              </ContextualDialog.Dialog>
            </Body>
            <Footer>
              <Button onClick={this.props.close}>Close</Button>
            </Footer>
          </Wrapper>
        )}
      </Fragment>
    );
  }
}

storiesOf('Dialog', module).add('default', () => (
  <ContextualDialog.DialogContainer>
    <Page>
      <ContextualDialog.Dialog>
        <DialogExample startOpen />
      </ContextualDialog.Dialog>
    </Page>
  </ContextualDialog.DialogContainer>
));
