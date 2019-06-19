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
          {this.state.item.link}
        </td>
        <td>
          {this.state.item.media}
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