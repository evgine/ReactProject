import {useState} from "react";

function TodoHeader({onAdd}){
    const [text, setText] = useState("");       //destructurisation
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }}/>
            <button>Add</button>
        </form>
    )
}

export default TodoHeader;