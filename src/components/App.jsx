import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder} from '../actions';


import '../App.css';  //not sure if this line is needed



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    }
  }

  addReminder(){
//    console.log('this.state', this.state);
    console.log('this', this);
  }
  render(){
    return (
      <div className="App">
        <div className="title">
          Reminder Cookies Pro
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
              onChange={event => this.setState({text: event.target.value})}
              />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={event => this.setSTate({text: event.target.value})}
            >
            Add Reminder
          </button>


        </div>
      </div>

    )
  }

}
function mapDispatchToProps(dispatch){
  return bindActionCreators({addReminder}, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
