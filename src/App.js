import React from "react";
import "./style.css";

import Employee from './data';

class Ananghd extends React.Component {
  render () {
    return (
      <div>
        <h1>ANANGHD</h1>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}
class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td> {this.props.data.id} </td>
        <td> {this.props.data.name} </td>
        <td> {this.props.data.age} </td>
      </tr>
    )
  }
}
class Content extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
          </tbody>
        </table>
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = Employee;
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Ananghd/>
        <Header/>
        <Content/>
        <hr/>
      </div>
    )
  }
}

export default App;