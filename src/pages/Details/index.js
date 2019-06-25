// index.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TableRow from './TableRow';
import DetailsAPI from '../../services/detail';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details: [],
      pathname: this.props.location.pathname
    };
    this.onDelete = this.onDelete.bind(this);
  }
  async componentDidMount(){
    await this.searchAbout();
  }

  async searchAbout(){
    const details = await DetailsAPI.findAll();
    this.setState({details: details})
  }

  tabRow(){
    this.searchAbout().then();
    return this.state.details.map( (item, index) =>{
      return <TableRow onDelete={this.onDelete} pathname={this.state.pathname} item={item} key={index} />
    })
  }

  onDelete(id) {
    DetailsAPI.delete(id)
    .then( response =>{
      this.props.location(`${this.state.pathname}`)
    }).catch( error =>{
      this.props.history.push(`${this.state.pathname}`)
    })
  }

  render() {
    return (
      <div>
        <h3 align="center">Detalhes</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Info</th>
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