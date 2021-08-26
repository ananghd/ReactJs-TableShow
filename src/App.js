import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Employee from './data';

class Ananghd extends React.Component {
  render() {
    return (
      <div>
        <h1>ANANGHD</h1>
      </div>
    );
  }
}
export default Ananghd;


class Header extends React.Component {
  render() {
    console.log('header text:', this.props.text);
    return <h3>{this.props.text}</h3>;
  }
}
export default Header;


class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td> {this.props.data.id} </td>
        <td> {this.props.data.name} </td>
        <td> {this.props.data.age} </td>
      </tr>
    );
  }
}
export default TableRow;


class Content extends React.Component {
  render() {
    console.log('content text:', this.props.text);
    return (
      <div>
        <h3>{this.props.text} </h3>
        {/* <table>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key = {i} 
                     data = {person} />)}
          </tbody>
        </table> */}
      </div>
    );
  }
}
export default Content;

class Home extends React.Component {
  render() {
     return (
        <div>
           <h1>Home...</h1>
        </div>
     )
  }
}
export default Home;

class About extends React.Component {
  render() {
     return (
        <div>
           <h1>About...</h1>
        </div>
     )
  }
}
export default About;

class Contact extends React.Component {
  render() {
     return (
        <div>
           <h1>Contact...</h1>
        </div>
     )
  }
}
export default Contact;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Employee.data,
      text: 'initial text ...'
    };
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  updateState(e) {
    this.setState({
      text: e.target.value
    });
  }

  clearInput() {
    this.setState({
      text: ''
    });
    ReactDOM.findDOMNode(this.refs.searchInput).focus();
  }

  render() {
    return (
      <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <hr />
        {this.props.children}
        <hr />
        <Ananghd />
        <Header text={this.props.headerText} />
        <Content text={this.props.contentText} />
        <table>
          <tbody>
            {this.state.data.map((person, i) => {
              return <TableRow key={i} data={person} />;
            })}
          </tbody>
        </table>
        <hr />
        <br />
        <br />
        <input
          type="input"
          value={this.state.text}
          onChange={this.updateState}
          ref="searchInput"
        />
        <button onClick={this.clearInput}> CLEAR </button>
        <h4>{this.state.text}</h4>
      </div>
    );
  }
}

App.defaultProps = {
  headerText: "This's header text from props 1",
  contentText: "This's content text from props 2"
};

export default App;