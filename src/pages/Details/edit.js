// edit.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import DetailsAPI from '../../services/detail';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeInfo = this.onChangeInfo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      title: '',
      info: '',
    }
  }

  componentDidMount() {    
    DetailsAPI.find(this.props.match.params.id)
    .then(response => {
      this.setState({ 
        title: response.title,
        info: response.info
      })
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeInfo(e) {
    this.setState({
      info: e.target.value
    })  
  }  

  onSubmit(e) {
    e.preventDefault();
    const item = {
      title: this.state.title,
      info: this.state.info,
      id: this.props.match.params.id
    };
    DetailsAPI.update(item).then( () =>{
      this.props.history.push('/admin/details');  
    })
    
  }
  onCancel(e){
    e.preventDefault();
    this.props.history.push('/admin/details')
  }
 
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Editar</h3>
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <label>Titulo:  </label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
          </div>
          <div className="form-group">
            <label>Items: </label>
            <textarea row="10" 
              className="form-control"
              value={this.state.info}
              onChange={this.onChangeInfo}
              />
          </div>
          <div className="form-group">
            <input type="submit" 
              value="Salvar" 
              className="btn btn-primary"/>
            <button className="btn btn-danger" onClick={this.onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    )
  }
}