// create.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ProfileAPI from '../../services/profile';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeResume = this.onChangeResume.bind(this);
    this.onChangeArea = this.onChangeArea.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      name: '',
      resume: '',
      email: '',
      area: '',
      phone: ''
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeResume(e) {
    this.setState({
      resume: e.target.value
    })  
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeArea(e) {
    this.setState({
      area: e.target.value
    })  
  }

  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const profile = {
      name: this.state.name,
      resume: this.state.resume,
      email: this.state.email,
      area: this.state.area,
      phone: this.state.phone
    };
    
    ProfileAPI.create(profile).then( () =>{
      this.props.history.push('/profile')
    })
    
  }

  onCancel(e){
    e.preventDefault();
    this.props.history.push('/profile')
  }
 
  render() {
    const path = this.props.location.pathname;
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Profile</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome:  </label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.name}
              onChange={this.onChangeName}
              />
          </div>
          <div className="form-group">
            <label>Resumo:  </label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.resume}
              onChange={this.onChangeResume}
              />
          </div>
          <div className="form-group">
            <label>E-mail:  </label>
            <input 
              type="email" 
              className="form-control" 
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
          </div>
          <div className="form-group">
            <label>Área:  </label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.area}
              onChange={this.onChangeArea}
              />
          </div>
          <div className="form-group">
            <label>Telefone:  </label>
            <input 
              type="tel" 
              className="form-control" 
              value={this.state.phone}
              onChange={this.onChangePhone}
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