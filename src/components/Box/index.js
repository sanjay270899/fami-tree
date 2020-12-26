import React, { useState } from 'react';
import '../../assets/style/Box.css';
import defaultProfile from '../../assets/img/default.jpg';

function Box(props) {

    const [data, setData] = useState(props.data);
    const [isEdit, setIsEdit] = useState(false);

    function toggleEdit() {
        setIsEdit(current => !current);
    }

    function changeData(data) {
        props.data = data;
        setData(data);
    }

    return (
        <>
            <div id="Box" onClick={toggleEdit}>
                <img src={defaultProfile} alt="Profile Photo" />
                <div className="Box-name">{data.own.name}</div>
            </div>
            {
                isEdit && <EditMenu setData={setData} setIsEdit={setIsEdit} data={props.data} />
            }
        </>
    )
}

function EditMenu(props) {

    const [name, setName] = useState(props.data.own.name);
    function changeName(name) {
        setName(name);
    }

    const [errors, setErrors] = useState([])

    function submit() {
        if (name === '') {
            setErrors(current => [...current, "Empty name is not allowed!"]);
            setTimeout(() => {
                setErrors(current => {
                    console.log(current);
                    return current.splice(0, 1);
                })
            }, 3000);
        } else {
            props.setIsEdit(current => !current);
            props.data.own.name = name;
            props.setData(current => ({ ...current, own: { ...current.own, name: name } }))
        }
    }

    return (
        <div id="EditMenu">
            <div className="in">
                <div className="in-Name">
                    <label htmlFor="in-name">
                        Name: <input type="text" name="" id="in-name" value={name} onChange={(e) => changeName(e.target.value)} />
                    </label>
                </div>
                <button onClick={submit}>Submit</button>
            </div>

            <div className="errors">
                {
                    errors.map(error => (
                        <div className="error">{error}</div>
                    ))
                }
            </div>
        </div >
    )
}

export default Box
