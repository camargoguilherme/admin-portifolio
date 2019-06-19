// index.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TableRow from './TableRow';
import AboutAPI from '../../services/about';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      about: [],
      pathname: this.props.location.pathname
    };
    this.onDelete = this.onDelete.bind(this);
  }
  async componentDidMount(){
    await this.searchAbout();
  }

  async searchAbout(){
    const about = await AboutAPI.findAll();
    this.setState({about: about})
  }

  tabRow(){
    this.searchAbout().then();
    return this.state.about.map( (item, index) =>{
      return <TableRow onDelete={this.onDelete} pathname={this.state.pathname} item={item} key={index} />
    })
  }

  onDelete(id) {
    AboutAPI.delete(id)
    .then( response =>{
      this.props.location('/about')
    }).catch( error =>{
      this.props.history.push('/about')
    })
  }

  render() {
    return (
      <div>
        <h3 align="center">Sobre</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Items</th>
              <th colSpan="2">Ações</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
          <Link to={`${this.state.pathname}/create`} className="btn btn-success">Novo</Link>
        </table>
      </div>
    );
  }
  }