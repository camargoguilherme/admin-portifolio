// edit.js
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { path } from '../../const/path';

import ProfileAPI from '../../services/profile';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      name: '',
      resume: '',
      email: '',
      area: '',
      phone: '',
      avatar: null,
      curriculum: null,
      pathAvatar: '',
      pathCurriculum: ''
    }
  }

  async componentDidMount() {    
    ProfileAPI.find(this.props.match.params.id)
    .then( res =>{
      this.setState({
        name: res.name,
        resume: res.resume,
        email: res.email,
        area: res.area,
        phone: res.phone,
        pathAvatar: res.avatar,
        pathCurriculum: res.curriculum
      })
    })
    .catch(function (error) {
        console.log(error);
    })
  }
    
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeAvatar = (files) =>{
    this.setState({ avatar: files[files.length-1]})
  }

  onChangeCurriculum = (files) => {
    this.setState({ curriculum: files[files.length-1]})
  }

  onSubmit = (e) =>{
    e.preventDefault();
    let data = new FormData();
    
    data.append('name', this.state.name);
    data.append('resume', this.state.resume);
    data.append('email', this.state.email);
    data.append('area', this.state.area);
    data.append('phone', this.state.phone);
    this.state.avatar && data.append('avatar', this.state.avatar);
    this.state.curriculum && data.append('curriculum', this.state.curriculum);
    data.append('_method', 'PUT');

    const id = this.props.match.params.id;

    ProfileAPI.update(id, data).then( () =>{
      this.props.history.push(`${path}/admin/profile`);  
    })
    
  }
  onCancel = (e) => {
    e.preventDefault();
    this.props.history.push(`${path}/admin/profile`)
  }
 
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Editar</h3>
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
          <label>Nome:  </label>
            <input 
              type="text" 
              name="name"
              placeholder="Felix o gato"
              className="form-control" 
              value={this.state.name}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label>Resumo:  </label>
            <input 
              type="text"
              name="resume"
              placeholder="Seu resumo aqui"
              className="form-control" 
              value={this.state.resume}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label>E-mail:  </label>
            <input 
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              className="form-control" 
              value={this.state.email}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label>Área:  </label>
            <input 
              type="text"
              name="area"
              placeholder="Area de Atuação"
              className="form-control" 
              value={this.state.area}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label>Telefone:  </label>
            <input 
              type="tel"
              name="phone"
              placeholder="(99) 99999-9999"
              className="form-control" 
              value={this.state.phone}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group box-container">
            <label>Avatar:  </label>
            <Dropzone onDropAccepted={this.onChangeAvatar}>
              {({ getRootProps, getInputProps}) =>(
                <div className="upload" {...getRootProps()}>
                  <input name="avatar" {...getInputProps()}/>
                  <p>Arraste arquivos ou clique aqui</p>
                </div>
              )}
            </Dropzone>
            <img src={this.state.pathAvatar} alt="My Profile" height="100" width="100" />
          </div>

          <div className="form-group box-container">
            <label>Curriculo:  </label>
            <Dropzone onDropAccepted={this.onChangeCurriculum}>
              {({ getRootProps, getInputProps}) =>(
                <div className="upload" {...getRootProps()}>
                  <input name="curriculum" {...getInputProps()}/>
                  <p>Arraste arquivos ou clique aqui</p>
                </div>
              )}
            </Dropzone>
          </div>
          
          <div className="form-group">
            <div>
              <input type="submit" value="Salvar" className="btn btn-primary"/>
            
              <button className="btn btn-danger" onClick={this.onCancel}>Cancelar</button>            
            </div>
          </div>
        </form>
      </div>
    )
  }
}