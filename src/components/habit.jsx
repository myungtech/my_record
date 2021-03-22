import React, { PureComponent } from 'react';

//class는 항상 대문자
class Habit extends PureComponent {

    // handleIncrement = () => {
    ////state 오브젝트 안에 있는 count를 증가 시킨뒤 state를 업데이트 해야한다.
    ////state를 업데이트 할 때는 리엑트는 setState함수를 꼭 호출시켜야한다.
    // this.setState({ count: this.state.count + 1 });
    //     this.setState({ count: count < 0 ? 0 : count });
    // };
    componentDidMount() {
        // console.log(`habit: ${this.props.habit.name} mounted`);
    }
    componentWillUnmount() {
        // console.log(`habit: ${this.props.habit.name} will unmount`);
    }

    handleIncrement = (habit) => {
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = (habit) => {
        this.props.onDecrement(this.props.habit);
    };
    handleDelete = (habit) => {
        this.props.onDelete(this.props.habit);
    };


    render() {
        //반복적으로  나오는경우 코딩하는 법
        //habit안에 있는 name과 count의 데이터가 동일 이름으로 들어감
        const { name, count } = this.props.habit;
        // console.log(`habit.jsx name : ${name}`);

        //다수의 태그가 있을때는 묶어서 사용해야한다.
        return (

            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement}
                >
                    <i className="far fa-plus-square"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}
                >
                    <i className="far fa-minus-square"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}
                >
                    <i className="far fa-trash-alt"></i>
                </button>
            </li>
        );

    }
}

export default Habit;