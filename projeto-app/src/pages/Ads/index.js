import React from "react";

import { Container, Ads } from "./styles";
import Button from "../../styles/components/Button";
import api from "../../services/api";

let data = []

export default function Anuncio({ history }) {
  console.log(history);

  async function handleSubmit(e) {
    // e.preventDefault();
    history.push("/ads");
  }

  const componentDidMount = () => {
    this.loadAds();
  }

  const loadAds = async () => {
    const response = await api.get("/ads");
    console.log(response);
    data = response.data;
  };

  const buildAds = () => {
    <div>
      {data.map(item => {
        return (
          <Ads>
            <p>Títilo: {item.title}</p>
            <p>Descrição: {item.description}</p>
            <p>Autor: {item.author}</p>
            <p>Preço: {item.price}</p>
          </Ads>
        );
      })}
    </div>;
  };

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
      {buildAds()}
  );
}
