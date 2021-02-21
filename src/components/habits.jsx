import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

//습관들을 담을 수 있는 컨테이너 컴포넌트
class Habits extends Component {
    //배열 데이터
    // state = {
    //     habits: [
    //         { id: 1, name: 'Reading', count: 0 },
    //         { id: 2, name: 'Running', count: 0 },
    //         { id: 3, name: 'Coding', count: 0 }
    //     ]
    // };

    //데이터를 가지고 있는 곳이 내가 이 데이터를 어떻게 수정하면 되는지 
    //잘 알고 있는 최고의 장소이기 때문에 
    //여기에서 데이터가 삭제, 추가, 변경로직을 구성한다.
    handleIncrement = (habit) => {

        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    //배열들을 빙글빙글 돌면서 각각의 state안의 습관들을 habit컴포넌트에 연결해줌
    //Habits 컴폰넌트는 총 state상의 개수(3개)만큼의 habit컴포넌트를 가지게됨
    render() {
        return (
            <>
                <HabitAddForm />
                <ul>
                    {
                        this.props.habits.map(habit => (
                            <Habit
                                key={habit.id}
                                habit={habit}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}
                            />
                        ))
                    }

                </ul>
            </>
        );
    }
}

export default Habits;