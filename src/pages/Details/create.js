// create.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import DetailsAPI from '../../services/detail';

export default class Create extends Component {
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
    const detail = {
      title: this.state.title,
      info: this.state.info
    };

    DetailsAPI.create(detail).then( () =>{
      this.props.history.push('/details')
    })
    
    this.setState({
      title: '',
      info: []
    })
  }

  onCancel(e){
    e.preventDefault();
    this.props.history.push('/details')
  }
 
  render() {
    const path = this.props.location.pathname;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Criar</h3>
        <form onSubmit={this.onSubmit}>
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
            <label>Informações: </label>
            <textarea row="10" 
              className="form-control"
              value={this.state.info}
              onChange={this.onChangeInfo}
              />
          </div>
          <div className="form-group">
            <input type="submit" value="Cadastrar" className="btn btn-primary"/>
            <button className="btn btn-danger" onClick={this.onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    )
  }
}