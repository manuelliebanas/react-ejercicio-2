import './App.css'
import {useState} from 'react';

function App() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')

    const addTodo = () => {
        setTodos([
            ...todos,
            {text: todo, status: false},
        ])
        setTodo('')
    }

    const clearDone = () => {
        setTodos(todos.filter((item) => !item.status))
    }

    const changeHandler = (e) => {
        setTodo(e.target.value)
    }

    const toggleStatus = (index) => {
        setTodos(todos.map((item, i) => i === index ? {...item, status: !item.status} : item))
    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            addTodo();
        }
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Task List</h5>
                <input type="text" value={todo} onChange={changeHandler} onKeyDown={handleKeyDown}/>
                <button className="btn btn-success mx-3" onClick={addTodo}>Add</button>
                <button className="btn btn-danger" onClick={clearDone} disabled={todos.length <= 0}>Clear done</button>
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr className="text-center">
                        <th className="w-25">Done</th>
                        <th>Task</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map((item, index) => (
                            <tr key={index}>
                                <td className="w-25 text-center">
                                    <input
                                        type="checkbox"
                                        checked={item.status}
                                        onChange={() => toggleStatus(index)}
                                    />
                                </td>
                                <td>{item.text}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default App
