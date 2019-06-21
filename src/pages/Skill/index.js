// index.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TableRow from './TableRow';
import SkillAPI from '../../services/skill';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      skill: [],
      pathname: this.props.location.pathname
    };
    this.onDelete = this.onDelete.bind(this);
  }
  async componentDidMount(){
    await this.searchSkill();
  }

  async searchSkill(){
    const skill = await SkillAPI.findAll();
    this.setState({skill: skill})
  }

  tabRow(){
    this.searchSkill().then();
    return this.state.skill.map( (item, index) =>{
      return <TableRow onDelete={this.onDelete} pathname={this.state.pathname} item={item} key={index} />
    })
  }

  onDelete(id) {
    SkillAPI.delete(id)
    .then( response =>{
      this.props.history.push('/skill')
    }).catch( error =>{
      this.props.history.push('/skill')
    })
  }

  render() {
    return (
      <div>
        <h3 align="center">Habilidades</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Habilidades</th>
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