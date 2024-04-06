import React from "react";
import { useState } from "react";

const Content = () => {

    const [count, setCount] = useState(0);
    const [textArea, textChange] = useState("Learn");
    const [todoList, updatetodos] = useState([
        {
            id: 1,
            name: "task1",
            checked: false,
            label: "Task One"
        },
        {
            id: 2,
            name: "task2",
            checked: true,
            label: "Task Two"
        },
        {
            id: 3,
            name: "task3",
            checked: false,
            label: "Task Three"
        },
        {
            id: 4,
            name: "task4",
            checked: false,
            label: "Task Four"
        }
    ]);

    const buttonClick = (event) => {
        if (event.target.name === "plusBtn") {
            setCount(count + 1);
        } else if (event.target.name === "minusBtn") {
            setCount(count - 1);
        } else if (event.target.name === "changeText") {
            let keyWordStore = ["Learn", "Understand", "Make", "have fun with"];
            let randVal = Math.floor(Math.random() * 4);
            let keyWordRes = keyWordStore[randVal];
            textChange(keyWordRes);
        } else if ((event.target.name).includes("task")) {
            const listUpdated = todoList.filter(item => item.name !== event.target.name);
            updatetodos(listUpdated);
        } else if ((event.target.name).includes("todoListAddBtn")) {
            let hello = (document.getElementsByName("todoListInput"))[0];
            if(hello.value !== "") {
                let taskStruct = {
                    id: todoList.length + 1,
                    name: "task" + (todoList.length + 1),
                    checked: false,
                    label: hello.value
                }
                let updatedNew = [...todoList, taskStruct];
                console.log(updatedNew);
                updatetodos(updatedNew);
            }
        }
    }

    const checkboxHandler = (event,id) => {
        const listItems = todoList.map((item) => item.id === id ? {...item, checked: !item.checked} : item );
        updatetodos(listItems);
    }

    return (
        <main>
            <div className='contentPCls'>
                Let us {textArea} React apps
                <br></br>
                <button className="changeTextCls" name="changeText" onClick={(event) => buttonClick(event)}> Change the text</button>
            </div>
            <div className="plusminusBtnSecCls">
                <br></br>
                <button className="minusBtnCls" name="minusBtn" onClick={(event) => buttonClick(event)}>-</button>
                <br></br>
                <span>{count}</span>
                <br></br>
                <button className="plusBtnCls" name="plusBtn" onClick={(event) => buttonClick(event)}>+</button>
            </div>
            <div className="todoListPCls">
                <div className="todoListInputAreaCls">
                    <input className="todoListInputCls" placeholder="Enter your task" type="text" name="todoListInput"></input>
                    <button className="todoListAddBtnls" name="todoListAddBtn" onClick={(event) => buttonClick(event)}>Add Task</button>
                </div>
                <div className="todoListChildCls">
                    <ul className="todoListHeadCls">
                        {todoList.map((item) => (
                            <li key={item.id} className="listItemHoldCls">
                                <input type="checkbox" onChange={(event) => checkboxHandler(event,item.id)} checked={item.checked}></input>
                                <label>{item.label}</label>
                                <button name={item.name} onClick={(event) => buttonClick(event)} >Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Content;