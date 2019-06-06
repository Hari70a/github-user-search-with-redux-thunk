import React, { Component } from "react";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
import { thunk_action_creator } from "./actions/fetchAction";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const username = this.getUsername.value;
    console.log(username);
    this.props.dispatch(thunk_action_creator(username));
    this.getUsername.value = "";
  };
  render() {
    console.log(this.props.data, Object.keys(this.props.data.userData));
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">Enter the Github Username</h2>
          <input
            type="text"
            placeholder="Enter Github Username"
            required
            ref={input => (this.getUsername = input)}
          />
          <button className="button">Submit</button>
          {this.props.data.isFetching ? <h3>Loading...</h3> : null}
          {this.props.data.isError ? (
            <h3 className="error">No such User exists.</h3>
          ) : null}
          {Object.keys(this.props.data.userData).length > 0 ? (
            <UserInfo user={this.props.data.userData} />
          ) : null}
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(App);
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
