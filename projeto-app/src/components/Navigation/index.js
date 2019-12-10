import React, { Component } from "react";

import { Container, List, Item, Logout } from "./styles";

export default class Navigation extends Component {
  render() {
    return (
      <Container>
        <List>
          <Item>
            <img
              alt="ADS"
              src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=ADS"
            />
          </Item>
        </List>
        <Logout onClick={() => {}}>Sair</Logout>
      </Container>
    );
  }
}
