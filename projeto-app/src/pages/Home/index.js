import React, { Component } from "react";
import api from "../../services/api";

import Navigation from "../../components/Navigation";
import Ads from "../Ads";
import { Container } from "./styles";

let data = [];

const ContainerCards = () => (
  <div>
    {data.map(item => {
      return (
        <div className="card" key={data._id}>
          <section className="topic">
            <h2 className="title-topic">Título</h2>
            <h3 className="content-topic">{item.title}</h3>
          </section>
          <section className="topic">
            <h2 className="title-topic">Descrição</h2>
            <p className="text-topic">{item.description}</p>
          </section>
          <section className="topic">
            <h2 className="title-topic">Autor</h2>
            <h3 className="content-topic">{item.author}</h3>
          </section>
          <section className="topic">
            <h2 className="title-topic">Preço</h2>
            <h3 className="price-topic">R${item.price}</h3>
          </section>
        </div>
      );
    })}
  </div>
);

export default class Home extends Component {
  componentDidMount() {
    this.loadAds();
  }

  loadAds = async () => {
    const response = await api.get("/ads");
    console.log(response);
    data = response.data;
  };

  render() {
    return (
      <div>
        <Container>
          <Navigation />
          <Ads />
        </Container>

        {ContainerCards()}
      </div>
    );
  }
}
