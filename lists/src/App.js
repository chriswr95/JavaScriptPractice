import React, { Component } from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
    	lists: [], // this holds the name of each list
    	items: {} // this property names of this object are the names of the lists; their values are arrays of the items in each list
    };
  }

  /**
   * This function takes the state of an AddList component as its parameter
   * and updates the state of this App component by adding a new entry to the "lists"
   * array and then adding a new property in the "items" object that has the same name
   * as the value put into the "lists" array. It should then re-render this App component.
   */
  handleAddList(s) {
      // Implement this function!
      console.log("Adding list...");
      console.log(this.state);
      if(this.state.lists.includes(s.newID)){
        console.log("Please choose unique list name.");
        return;
      }
      var lists = this.state.lists;
      lists.push(s.newID);
      this.setState({
        lists: lists
      });
      var updatedItems = this.state.items;
      updatedItems[s.newID] = [];
      this.setState({items: updatedItems});
  }

  /**
   * This function takes the state of an AddItem component as its parameter
   * and updates the state of this App component by adding a new value to the
   * appropriate array in the "items" property of the state. Keep in mind that
   * the property names of "items" are the names of each list, which is mapped
   * to an array of the items in that list. After updating the "items" part of
   * the state, this function  should then re-render this App component.
   */
  handleAddItem(s) {
      // Implement this function!
      console.log("Adding item...");
      // console.log(s);
      var stateCopy = this.state;
      stateCopy.items[s.idName].push(s.newItem);
      console.log(stateCopy.items);
      this.setState(stateCopy);
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists lists={this.state.lists} items={this.state.items} addItem={this.handleAddItem.bind(this)} />
        </div>
      </div>
    );
  }

}

export default App;
