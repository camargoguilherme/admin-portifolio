// create.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SkillAPI from '../../services/skill';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      title: ''
    }
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const item = {
      title: this.state.title
    };
    SkillAPI.create(item).then( () =>{
      this.props.history.push('/about')
    })
    
    this.setState({
      title: ''
    })
  }

  onCancel(e){
    e.preventDefault();
    this.props.history.push('/about')
  }
 
  render() {
    const path = this.props.location.pathname;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Business</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Habilidade:  </label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.title}
              onChange={this.onChangeTitle}
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