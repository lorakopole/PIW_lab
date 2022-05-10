import { useState } from 'react';
import Student from '../Objects/Student';
import StudentOffers from '../Objects/StudentOffers';
import { useNavigate } from "react-router-dom";
import "../Styles/new.css";

const NewOffer = (props) => {
    const {offers, setNewOffers} = props;
    const [newStudentOffers, setNewStudentOffers] = useState(
        new StudentOffers("", [], "", 
        new Student("", "")));

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [description, setDescription] = useState("");
    const [subject, setSubject] = useState("");
    
    const [tmpTags, setTmpTags] = useState("");

    const handleNewStudentInput = (event) => {
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

            case 'subject':
                setSubject(event.target.value);
                break;
        }
        setNewStudentOffers(new StudentOffers(description, tmpTags.split(" "), subject, new Student(name, mail)));
        console.log({newStudentOffers});
    }

    const navigate = useNavigate();
    const handleMenuClick = () => navigate("/", { replace: true });

    const handleTagsInput = (event) => {
        setTmpTags(event.target.value);
        var tmp = newStudentOffers;
        tmp.tags = tmpTags.split(",").map((tag) => tag.trim());
        setNewStudentOffers(tmp);
        
        console.log({newStudentOffers});
    }

    const handleSave = (event) => {
        setNewOffers(offers.concat(newStudentOffers));
        console.log(newStudentOffers);
        console.log(offers);
        handleMenuClick();
    }

    return (
        <>
            <div className='AddBox'>
            <label htmlFor='name'>Imie</label>
            <input id='name' value={name} onChange={handleNewStudentInput}></input>

            <label htmlFor='mail'>E-Mail</label>
            <input id='mail' value={mail} onChange={handleNewStudentInput}></input>
            
            <label htmlFor='description'>Opis</label>
            <input id='description' value={description} onChange={handleNewStudentInput}></input>
            
            <label htmlFor='tags'>Tagi (tagi oddziel spacją)</label>
            <input id='tags' value={tmpTags} onChange={handleTagsInput}></input>

            <label htmlFor='subject'>Przedmiot</label>
            <input id='subject' value={subject} onChange={handleNewStudentInput}></input>

            <input type="button" value={"Zapisz"} onClick={handleSave}></input>
            </div>
        </>
    );
}

export default NewOffer;