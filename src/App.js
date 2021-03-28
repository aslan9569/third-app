import React from 'react';
import {useState} from "react";

function App(props) {
    const [text, setText] = useState('')

    const [todos, setTodos] = useState([
        {
            text: 'первое дело',
            done: true
        },
        {
            text: 'не твое дело',
            done: false
        },
        {
            text: 'третье дело',
            done: false
        }
    ])

    const handleAdd = () => {
        setTodos([
            {
                text: text
            },
            ...todos
        ])
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const [check, setCheck] = useState("")
    const checkClick = (event) => {
        setCheck(event.target.checked)
    }




    // const handleDo = (event) => {
    //     setCheck(event.target.value)
    // }


    return (
        <div>
            <div>
                <input type="text" value={text} onChange={handleChange}/>
                <button onClick={handleAdd}>
                    add
                </button>
                <input type="checkbox" checked={check} onChange={checkClick} />

            </div>
            <ul>
                {todos.map((item) => {
                    return (
                        <li>
                            <input type="checkbox" checked={item.done} />
                            {item.text}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;