import React, {Component} from 'react';
import FlipMove from 'react-flip-move';
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';


class App extends Component {
  state = {
    items: [
    {id: 1, name:"Hamza",age: 22},
    {id: 2, name:"Mohamed",age: 23},
    {id: 3, name:"Abdo",age: 24}
  ]
  }
  deleteItem = (id) => {
    let items = this.state.items.filter (item => {
      return item.id !== id
    })
    this.setState({items})
  }
  addItem = (item)=> {
    item.id= Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})

  }
  
  render () {
  return (
    <div className="App container">
          <h1 className="text-center">Todo App</h1>
          <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
          <FlipMove duration= {300} easing="ease-in-out">
          <AddItem addItem={this.addItem}/>
          </FlipMove>
    </div>
    
  );
}
}

export default App;
