// edit.js
import React, { Component } from 'react';
import AboutAPI from '../../services/about';
import { Link} from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeItems = this.onChangeItems.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.state = {
      title: '',
      items: []
    }
  }

  componentDidMount() {    
    AboutAPI.find(this.props.match.params.id)
    .then(response => {
      this.setState({ 
        title: response.title,
        items: response.items
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
  onChangeItems(e) {
    this.setState({
      items: e.target.value.trim().split('\n')
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const item = {
      title: this.state.title,
      items: this.state.items,
      id: this.props.match.params.id
    };
    AboutAPI.update(item).then( () =>{
      this.props.history.push('/about');  
    })
    
  }
  onCancel(e){
    e.preventDefault();
    this.props.history.push('/about')
  }
 
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Sobre - Editar</h3>
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
              value={this.state.items.join('\n')}
              onChange={this.onChangeItems}
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