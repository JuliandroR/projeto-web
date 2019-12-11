import React from "react";

import { Container, Ads } from "./styles";
import Button from "../../styles/components/Button";

export default function Anuncio({ history }) {
  async function handleSubmit(e) {
    e.preventDefault();
    history.push("/ads");
  }

  return (
    <Container>
      <header>
        <h1>Anúncios</h1>
        <div>
          <Button onClick={handleSubmit}>+ Novo</Button>
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
}
