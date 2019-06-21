// edit.js
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link} from "react-router-dom";

import PortifolioAPI from '../../services/portifolio';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      title: '',
      github: '',
      image: null,
      pathImage: ''
    }
  }

  async componentDidMount() {    
    PortifolioAPI.find(this.props.match.params.id)
    .then( res =>{
      this.setState({
        title: res.title,
        github: res.github,
        pathImage: res.image,
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

  onChangeCapa = (files) =>{
    this.setState({ image: files[files.length-1]})
  }

  onSubmit = (e) =>{
    e.preventDefault();
    let data = new FormData();
    
    data.append('title', this.state.title);
    data.append('github', this.state.github);
    data.append('image', this.state.image);
    data.append('_method', 'PUT');

    const id = this.props.match.params.id;

    PortifolioAPI.update(id, data).then( () =>{
      this.props.history.push('/portifolio');  
    })
    
  }
  onCancel = (e) => {
    e.preventDefault();
    this.props.history.push('/portifolio')
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
              name="title"
              placeholder="API Portifolio"
              className="form-control" 
              value={this.state.title}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label>GitHub:  </label>
            <input 
              type="text"
              name="github"
              placeholder="Link para github"
              className="form-control" 
              value={this.state.github}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group box-container">
            <label>Capa:  </label>
            <Dropzone onDropAccepted={this.onChangeCapa}>
              {({ getRootProps, getInputProps}) =>(
                <div className="upload" {...getRootProps()}>
                  <input name="image" {...getInputProps()}/>
                  <p>Arraste arquivos ou clique aqui</p>
                </div>
              )}
            </Dropzone>
            <img src={this.state.pathAvatar} alt="Capa" height="100" width="100" />
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