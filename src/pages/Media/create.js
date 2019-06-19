// create.js
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MediaAPI from '../../services/media';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeMedia = this.onChangeMedia.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);

    this.state = {
      title: '',
      media: 'fa-facebook-f'
    }
  }
  onChangeLink(e) {
    this.setState({
      title: e.target.value
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
      title: this.state.title,
      media: this.state.media
    };
    
    MediaAPI.create(item).then( () =>{
      this.props.history.push('/about')
    })
    
    this.setState({
      title: '',
      media: 'fa-facebook-f'
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
        <h3>Media</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Link:  </label>
            <input 
              type="text" 
              className="form-control" 
              value={this.state.title}
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
            <input type="submit" value="Cadastrar" className="btn btn-primary"/>
            <button className="btn btn-danger" onClick={this.onCancel}>Cancelar</button>
          </div>
        </form>
      </div>
    )
  }
}
