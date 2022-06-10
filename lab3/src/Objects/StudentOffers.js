import "../Styles/Student.css";
import { Link } from 'react-router-dom'
class StudentOffers {
    constructor(description, tags, subjects,student)
    {
        this.description = description;
        this.tags = tags;
        this.subjects = subjects;
        this.student = student;
    }



    toHTML = (i) => {
        return (
            <div className='Box' key={i}>
              <div className="Student-name" >{this.student.name}</div>
              <div className="Desc">{this.description}</div>  
              <div className="Tags">{this.tags.join(", ")}</div>
              <div className="Subj">{this.subjects}</div>
              <Link to={"/SendEMail"} className="sendMail">Wyślij wiadomość</Link>
            </div>
        );
    };
}

export default StudentOffers;