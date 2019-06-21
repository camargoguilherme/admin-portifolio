// index.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TableRow from './TableRow';
import PortifolioAPI from '../../services/portifolio';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portifolio: [],
      pathname: this.props.location.pathname
    };
    this.onDelete = this.onDelete.bind(this);
  }
  async componentDidMount(){
    await this.searchAbout();
  }

  async searchAbout(){
    const portifolio = await PortifolioAPI.findAll();
    this.setState({portifolio: portifolio})
  }

  tabRow(){
    this.searchAbout().then();
    return this.state.portifolio.map( (item, index) =>{
      return <TableRow onDelete={this.onDelete} pathname={this.state.pathname} portifolio={item} key={index} />
    })
  }

  onDelete(id) {
    PortifolioAPI.delete(id)
    .then( response =>{
      this.props.history.push('/portifolio')
    }).catch( error =>{
      this.props.history.push('/portifolio')
    })
  }

  render() {
    return (
      <div>
        <h3 align="center">Portifolio</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>GitHub</th>
              <th>Capa</th>
              <th colSpan="2">Ações</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
        <div>
          <Link to={`${this.state.pathname}/create`} className="btn btn-success">Novo</Link>
        </div>
      </div>
    );
  }
}