import React, { Component } from 'react';
import './styles.css'
class Item extends Component {
  constructor(props){
		super(props)
		this.state = {...props.data}
	}
  render() {
    return (
      // <!-- Portfolio Item 1 -->
        <div className="col-md-4 col-lg-4 item-list-option item-main mb-5">
          <div className="" data-toggle="modal" data-target={`#${this.state.target}`}>
            <h2 className="masthead-heading text-uppercase text-center text-white">{this.state.title}</h2>
          </div>
        </div>
    );
  }
}

export default Item;
