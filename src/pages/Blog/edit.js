// edit.js
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Link} from "react-router-dom";

import BlogAPI from '../../services/blog';

export default class Edit extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      title: '',
      resume: '',
      link: '',
      image: null,
      pathImage: ''
    }
  }

  async componentDidMount() {    
    BlogAPI.find(this.props.match.params.id)
    .then( res =>{
      this.setState({
        title: res.title,
        resume: res.resume,
        link: res.link,
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
    data.append('resume', this.state.resume);
    data.append('link', this.state.link);
    data.append('image', this.state.image);
    data.append('_method', 'PUT');

    const id = this.props.match.params.id;

    BlogAPI.update(id, data).then( () =>{
      this.props.history.push('/admin/blog');  
    })
    
  }
  onCancel = (e) => {
    e.preventDefault();
    this.props.history.push('/admin/blog')
  }
 
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Blog - Editar</h3>
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <label>Titulo:  </label>
            <input 
              type="text" 
              name="title"
              placeholder="Titulo do post"
              className="form-control" 
              value={this.state.title}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label>Resumo:  </label>
            <input 
              type="text"
              name="resume"
              placeholder="Resumo do post"
              className="form-control" 
              value={this.state.resume}
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label>Link:  </label>
            <input 
              type="text"
              name="link"
              placeholder="Link do post"
              className="form-control" 
              value={this.state.link}
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
            <img src={this.state.image} alt="Capa" height="100" width="100" />
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