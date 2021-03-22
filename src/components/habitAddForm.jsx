import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    //페이지가 reloading이 된다.
    const onSubmit = (event) => {

        // 브라우저의 기본기능을 취소, refresh 안됨
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();

    };

    //함수에서는 바로 변수에 접근이 가능하기 때문에 this를 지운다.
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                className="add-input"
                placeholder="Record" />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;