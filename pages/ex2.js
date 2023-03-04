import React from "react";
import styled from "styled-components";
import { useState } from "react";


const StyledWrapper = styled.div`
padding: 20px;
border: 1px solid rgba(0,0,0,.2);
justify-content: space-between;
border-radius: 8px;

.button{
    padding: 5px 8px;
    background-color: white;
    border-radius: 4px;
    cursor: pointer;
}
.buttondel{
    padding: 1px 4px;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    color: red;
}

    
.textlist{
    padding: 10px 10px;
    justify-content: space-around;
}
}
`

const Todolist = () => {
    const [toDo, setToDo] = useState([
        { id: 1, title: "Task 1", status: false },
        { id: 2, title: "Task 2", status: false }
    ]);

    const [newText, setText] = useState('');


    const handleAdd = () => {
        if (newText) {
            let num = toDo.length + 1;
            let newEntry = { id: num, title: newText, status: false }
            setToDo([...toDo, newEntry])
            setText('');
        }
    }
    const handleDel = (id) => {
        let newTexts = toDo.filter(text => text.id !== id)
        setToDo(newTexts);
    }


    return (

        <StyledWrapper>
            <h1>Todo list</h1>

            <div className="textlist">
                <input
                    value={newText}
                    onChange={(e) =>
                        setText(e.target.value)}
                    placeholder="What do you wanna do..."
                />
                <button className='button' onClick={handleAdd}> <span>Add</span></button>
            </div>
            {toDo && toDo.length ? '' : 'No Texts...'}

            {toDo && toDo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((text) => {
                    return (
                        <React.Fragment key={text.id}>
                          
                                <ul>
                                    <li>
                    
                                        <span>{text.title}</span>
                                    </li>
                                </ul>
                          
                            <button className='buttondel' onClick={() => handleDel(text.id)}>X</button>
                        </React.Fragment>


                    )
                }
                )
            }
        </StyledWrapper>
    )
}







export default Todolist;