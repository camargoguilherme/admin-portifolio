// TableRow.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props};
  }

  render() {
    
    return (
      <tr key={this.state.key}>
        <td>
          {this.state.portifolio.title}
        </td>
        <td>
          {
            <a href={this.state.portifolio.github} className="nav-link" target="_blank">{this.state.portifolio.title}</a>
          }
        </td>
        <td>
          <img src={this.state.portifolio.image} alt="Capa" height="100" width="100" />
        </td>
        <td>
          <Link to={`${this.state.pathname}/edit/${this.state.portifolio.id}`} className="btn btn-primary">Editar</Link>
        </td>
        <td>
          <button onClick={()=>this.props.onDelete(this.state.portifolio.id)} className="btn btn-danger">Deletar</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;