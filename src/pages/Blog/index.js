// index.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TableRow from './TableRow';
import BlogAPI from '../../services/blog';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blog: [],
      pathname: this.props.location.pathname
    };
    this.onDelete = this.onDelete.bind(this);
  }
  async componentDidMount(){
    await this.searchAbout();
  }

  async searchAbout(){
    const blog = await BlogAPI.findAll();
    this.setState({blog: blog})
  }

  tabRow(){
    this.searchAbout().then();
    return this.state.blog.map( (item, index) =>{
      return <TableRow onDelete={this.onDelete} pathname={this.state.pathname} blog={item} key={index} />
    })
  }

  onDelete(id) {
    BlogAPI.delete(id)
    .then( response =>{
      this.props.history.push('/blog')
    }).catch( error =>{
      this.props.history.push('/blog')
    })
  }

  render() {
    return (
      <div>
        <h3 align="center">Blog</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Resumo</th>
              <th>Link</th>
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