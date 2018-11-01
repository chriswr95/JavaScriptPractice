import React, { Component } from 'react';

class AddList extends Component {
  constructor(props){
    super(props);
    this.state = {newID: 'test'};
  }
  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      console.log("handling submit...");
      // console.log(this.state);
      this.props.addList(this.state);
  }

  updateState(e){
    this.setState({newID: e.target.value});
  }

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div id='addList'>
      <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID' onChange={this.updateState.bind(this)}></input>
      </label>
      </div><br />
      <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;
