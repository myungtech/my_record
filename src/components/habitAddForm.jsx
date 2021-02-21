import React, { Component } from 'react';

class HabitAddForm extends Component {

    //페이지가 reloading이 된다.
    onSubmit = (event) => {

        event.preventDefault(); // 브라우저의 기본기능을 취소, refresh 안됨
        console.log("submit!!!");

    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;