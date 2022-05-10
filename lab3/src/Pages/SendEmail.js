import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../Styles/new.css";

const SendEmail = () => {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [description, setDescription] = useState("");
    const [modal, setModal] = useState("modal");

    const handleNewEmailInput = (event) => {
        switch (event.target.id) {
            case 'name':
                setName(event.target.value);
                break;
        
            case 'mail':
                setMail(event.target.value);
                break;

            case 'description':
                setDescription(event.target.value);
                break;

        }
    }

    const navigate = useNavigate();
    const handleMenuClick = () => navigate("/", { replace: true });

    const handleSave = (event) => {
        setModal("modal modal-move");
        setTimeout(function () {
            handleMenuClick();
          }, 4000);
    }

    return (
        <>
        <div className={modal}  onAnimationEnd={() => setModal("modal")}>
        Email send!
        </div>
            <div className='AddBox'>
            <label htmlFor='name'>Imie</label>
            <input id='name' value={name} onChange={handleNewEmailInput}></input>

            <label htmlFor='mail'>E-Mail</label>
            <input id='mail' value={mail} onChange={handleNewEmailInput}></input>
            
            <label htmlFor='description'>Tresc</label>
            <input id='description' value={description} onChange={handleNewEmailInput}></input>
            
            <input type="button" value={"Wyslij"} onClick={handleSave}></input>
            </div>
        </>
    );
}

export default SendEmail;