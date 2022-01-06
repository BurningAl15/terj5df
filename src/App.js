import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      new_guest: []
    }
  }

  handleChange_Name = (e) => {
    this.setState({ first_name: e.target.value });
  }

  handleChange_LastName = (e) => {
    this.setState({ last_name: e.target.value });
  }

  handleSubmit = (e) => {
    const new_guest = [...this.state.new_guest];
    new_guest.push({ first_name: this.state.first_name, last_name: this.state.last_name });
    this.setState({ new_guest: new_guest });
    this.setState({ first_name: '', last_name: '' });
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.first_name} onChange={this.handleChange_Name} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.last_name} onChange={this.handleChange_LastName} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.new_guest.map((value, index) => {
                    return <tr key={index}>
                      <td >{value.first_name}</td>
                      <td >{value.last_name}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


