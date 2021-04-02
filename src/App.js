import React, {useState} from 'react';

function App() {
    const [todo, setTodo] = useState([
        {
            text: 'Todos',
        }
    ])
    const [text, setText] = useState("");
    const [check, setCheck] = useState( false)
    const textOnchange = (e) => {
        setText(
            e.target.value
        )
    }
    const handleAdd = () => {
        setTodo(
            [
                ...todo,
                {
                    text: text,
                    done: check
                }
            ]
        )
    }
    const checkOnClick = (e) => {
        setCheck(
            e.target.checked
        )
    }
    return (
        <div>
            <div className='header'>
                <input type="text" className='textInput' onChange={textOnchange}/>
                <button className='button' onClick={handleAdd}>add</button>
                <input type="checkbox"  checked={check.done} className='box' onChange={checkOnClick}/>
            </div>
            {
                todo.map(item => {
                    return(
                        <div>
                            <div className='todo'>
                                <input type="checkbox" checked={item.done} />
                                {item.text}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;