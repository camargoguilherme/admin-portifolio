// edit.js
import React, { Component } from 'react';
import MediaAPI from '../../services/media';
import { Link} from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeMedia = this.onChangeMedia.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.state = {
      link: '',
      media: ''
    }
  }

  componentDidMount() {    
    MediaAPI.find(this.props.match.params.id)
    .then(response => {
      this.setState({ 
        link: response.link,
        media: response.media
      })
    })
    .catch(function (error) {
        console.log(error);
    })
    }

  onChangeLink(e) {
    this.setState({
      link: e.target.value
    });
  }
  onChangeMedia(e) {
    this.setState({
      media: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const item = {
      link: this.state.link,
      media: this.state.media,
      id: this.props.match.params.id
    };
    MediaAPI.update(item).then( () =>{
      this.props.history.push('/admin/media');  
    })
    
  }
  onCancel(e){
    e.preventDefault();
    this.props.history.push('/admin/media')
  }
 
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Media - Editar</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Link:  </label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.link}
              onChange={this.onChangeLink}
              />
          </div>
          <div className="form-group" onChange={this.onChangeMedia}>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radio" id="facebook-radio" value="fa-facebook-f"/>
              <label className="form-check-label" for="facebook-radio">
                Facebook
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radio" id="twitter-radio" value="fa-twitter"/>
              <label className="form-check-label" for="twitter-radio">
                Twitter
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radio" id="linkedin-radio" value="fa-linkedin-in"/>
              <label className="form-check-label" for="linkedin-radio">
                Linkedin
              </label>
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Salvar" className="btn btn-primary"/>
            <button className="btn btn-danger" onClick={this.onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    )
  }
}