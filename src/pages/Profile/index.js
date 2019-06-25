// index.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TableRow from './TableRow';
import ProfileAPI from '../../services/profile';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      pathname: this.props.location.pathname
    };
    this.onDelete = this.onDelete.bind(this);
  }
  async componentDidMount(){
    await this.searchAbout();
  }

  async searchAbout(){
    const profile = await ProfileAPI.findAll();
    this.setState({profile: profile})
  }

  tabRow(){
    this.searchAbout().then();
    return this.state.profile.map( (item, index) =>{
      return <TableRow onDelete={this.onDelete} pathname={this.state.pathname} profile={item} key={index} />
    })
  }

  onDelete(id) {
    ProfileAPI.delete(id)
    .then( response =>{
      this.props.history.push(`${this.state.pathname}`)
    }).catch( error =>{
      this.props.history.push(`${this.state.pathname}`)
    })
  }

  render() {
    return (
      <div>
        <h3 align="center">Perfil</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Resumo</th>
              <th>E-mail</th>
              <th>Area</th>
              <th>Phone</th>
              <th>Avatar</th>
              <th>Curriculo</th>
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