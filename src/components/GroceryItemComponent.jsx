import React, { useState } from 'react';

const GroceryItemComponent = ({item, handleEditItem, handleDeleteItem}) => {
    const [istEditing, setIsEditing] = useState(false);
    const [newItem, setNewItem] = useState(item.name);
    const [errors, setErrors] = useState("");

    const onEdit = () => {
        if(newItem){
            handleEditItem(item.id, newItem);
            setIsEditing(false);
            setErrors("");
        }
        else{
            setErrors("Grocery item must not be empty.");
        }
    };
    return (
    <>
        <li>
            {istEditing ? (
                <input
                type="text"
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
                />
            ) : (
                <span>{item.name}</span>
            )}
            
            <div>
                <button onClick={() => (istEditing ? onEdit() : setIsEditing(true))}
                className='btn-edit'
                >
                    {istEditing ? "Save" : "Edit"}
                </button>
                <button onClick={() => handleDeleteItem(item.id)}
                className='btn-delete'
                >
                    Delete
                </button>
            </div>
        </li>
        {errors ? <p className='errors'>{errors}</p> : null}
    </>
    )
}

export default GroceryItemComponent;