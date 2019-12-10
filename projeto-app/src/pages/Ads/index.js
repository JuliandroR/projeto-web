import React from "react";

import { Container, Ads } from "./styles";
import Button from "../../styles/components/Button";

const Anuncio = () => (
  <Container>
    <header>
      <h1>Anúncios</h1>
      <div>
        <Button onClick={() => {}}>+ Novo</Button>
      </div>
    </header>

    <Ads>
      <p>Títilo</p>
      <p>Descrição</p>
      <p>Preço</p>
      <p>Autor</p>
    </Ads>

    <Ads>
      <p>Títilo</p>
      <p>Descrição</p>
      <p>Preço</p>
      <p>Autor</p>
    </Ads>

    <Ads>
      <p>Títilo</p>
      <p>Descrição</p>
      <p>Preço</p>
      <p>Autor</p>
    </Ads>
  </Container>
);

export default Anuncio;
