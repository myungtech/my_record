import './app.css';
import Habits from './components/habits';
import React, { Component } from 'react';
import Navbar from './components/navbar';


class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'Coding', count: 0 }
    ]
  };

  handleIncrement = (habit) => {

    // console.log(`handleIncrement +++++++++ ${habit.name}`);

    //habits의 아이템들을 새로운 배열로 복사해온다.
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;

    this.setState({ habits });

  };

  handleDecrement = (habit) => {

    // console.log(`handleDecrement --------- ${habit.name}`);

    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;

    this.setState({ habits });

  };

  handleDelete = (habit) => {

    // console.log(`handleDelete vvvvvvvvv ${habit.name}`);

    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({ habits });

  };


  // 자식요소는 여러가지를 return 하면 안된다.
  // 부모요소가 하나만 있어야한다.
  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </>
    );
  }
}

export default App;
