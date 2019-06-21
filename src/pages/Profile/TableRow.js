// TableRow.js
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import AboutAPI from '../../services/about';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props};
  }

  render() {
    
    return (
      <tr key={this.state.key}>
        <td>
          {this.state.profile.name}
        </td>
        <td>
          {this.state.profile.resume.substring(0, this.state.profile.resume.indexOf('.'))}...
        </td>
        <td>
          {this.state.profile.email}
        </td>
        <td>
          {this.state.profile.area}
        </td>
        <td>
          {this.state.profile.phone}
        </td>
        <td>
          <img src={this.state.profile.avatar} alt="My Profile" height="100" width="100" />
        </td>
        <td>
          {
            this.state.profile.curriculum ?
            <a href={this.state.profile.curriculum} className="nav-link" target="_blank">Curriculo</a> :
            "Sem Curriculo"
          }
        </td>
        <td>
          <Link to={`${this.state.pathname}/edit/${this.state.profile.id}`} className="btn btn-primary">Editar</Link>
        </td>
        <td>
          <button onClick={()=>this.props.onDelete(this.state.profile.id)} className="btn btn-danger">Deletar</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;