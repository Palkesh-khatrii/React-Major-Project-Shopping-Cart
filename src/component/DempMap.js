import React, { useState } from 'react'

const DempMap = () => {
    console.log('items', items)
    const [add, setAdd] = useState(false)
    const [text, setText] = useState('')

    const handleSave = () => {
        items.push(
            {
                userId: 1,
                id: items.length + 1,
                title: text,
                completed: text.length>10 ? true : false
            }
        )
        setText('')
        setAdd(false)
    }
    const handleDelete = () => {
        alert(`Are you sure you want to delete the text`)
        setText('')
    }
    // const handleRemove =()=>{
    //     console.log('items................', text)
    //     console.log('items.id', items.id)
    //     items.filter(i => i!== items.id)
    // }
    return (
        <>
            {
                items.map((item) => (
                    <div key={item.id}>
                        {item.id}:  {item.title}
                        {
                            item.completed ? (

                                <button onClick={() => setAdd(true)}>Add</button>

                            ) : (
                                <button onClick={handleRemove}>Remove</button>
                            )
                        }
                    </div>
                ))
            }

            {add && (
                <>
                    <h6>{text}</h6>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </>
    )
}
var items =
    [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        },
        {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
        },
        {
            "userId": 1,
            "id": 6,
            "title": "qui ullam ratione quibusdam voluptatem quia omnis",
            "completed": false
        }
    ]

export default DempMap
