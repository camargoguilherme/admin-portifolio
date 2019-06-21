// TableRow.js
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props};
  }

  render() {
    
    return (
      <tr>
        <td>
          <a href={this.state.item.link} className="nav-link" target="_blank">{this.state.item.media.split('-')[1].toLocaleUpperCase()}</a>
        </td>
        <td>
          {this.state.item.media.split('-')[1].toLocaleUpperCase()}
        </td>
        <td>
          <Link to={`${this.state.pathname}/edit/${this.state.item.id}`} className="btn btn-primary">Editar</Link>
        </td>
        <td>
          <button onClick={()=>this.props.onDelete(this.state.item.id)} className="btn btn-danger">Deletar</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;