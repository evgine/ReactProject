import { useState } from "react";

function TodoHeader(props) {
    const [text, setText] = useState(props.edit ? props.edit.value : "");

    return (
        <form onSubmit={(e) => {
            e.preventDefault();

            props.onSubmit({
                id: Math.random(),
                text: text
            });
            setText("");
        }}>
            {props.edit ? (
                <>
                    <input
                        placeholder="Update Todo"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        name="text"
                    />
                    <button onClick={(e) => {
                        e.preventDefault();

                        props.onSubmit({
                            id: Math.random(),
                            text: text
                        });
                        setText("");
                    }}
                    >
                        Update
                    </button>
                </>
            ) : (
                <>
                    <input
                        placeholder="Add Todo"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                        name="text"
                    />
                    <button onClick={(e) => {
                        e.preventDefault();

                        props.onSubmit({
                            id: Math.random(),
                            text: text
                        });
                        setText("");
                    }}>
                        Add todo
                    </button>
                </>
            )}
        </form>
    );
}

export default TodoHeader;
