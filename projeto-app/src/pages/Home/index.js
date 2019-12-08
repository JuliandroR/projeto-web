import React, { Component } from "react";
import api from "../../services/api";

// import { Container } from './styles';

export default class Home extends Component {
  componentDidMount() {
    this.loadAds();
  }

  loadAds = async () => {
    const response = await api.get("/ads");
    console.log(response);
  };

  render() {
    return <h1>Hello</h1>;
  }
}
