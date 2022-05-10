import { useState } from 'react';
const Home = (props) => {
    const {offers} = props;

    const [searchDesc, setSearchDesc] = useState("");
    const [searchTag, setSearchTag] = useState("");
    const [searchSubjects, setSearchSubjects] = useState("");
    
    const [shownOffers, setShownOffers] = useState(offers);

    const handleSearchDescInput = (event) => {
        setSearchDesc(event.target.value);
    }

    const handleSearchTagInput = (event) => {
        setSearchTag(event.target.value);
    }

    const handleSearchSubjectsInput = (event) => {
        setSearchSubjects(event.target.value);
    }

    const handleSearch = (event) => {
        console.log(searchDesc)
        setShownOffers(offers.filter((offer) => {
            return (searchDesc===""?true:offer.description.toLowerCase().includes(searchDesc.toLowerCase())) &&
                (searchTag===""?true:offer.tags.map((tag => tag.toLowerCase())).includes(searchTag.toLowerCase())) &&
                (searchSubjects===""?true:offer.subjects.toLowerCase().includes(searchSubjects.toLowerCase()));
        }))
    }
    
    const offersHTML = shownOffers.map((offer, i) => {
        return <li key={i}>{offer.toHTML(i)}</li>
    });

    return (
        <>
        <div className='Search'>
          <div className='SearchBox1'>
            <label htmlFor='desc'>Opis</label>
            <input id='desc' value={searchDesc} onChange={handleSearchDescInput}></input>
          </div>
          <div className='SearchBox2'>
            <label htmlFor='tags'>Tagi</label>
            <input id='tags' value={searchTag} onChange={handleSearchTagInput}></input>
          </div>
          <div className='SearchBox3'>
            <label htmlFor='subj'>Przedmioty</label>
            <input id='subj' value={searchSubjects} onChange={handleSearchSubjectsInput}></input>
          </div>
            <input type="button" value={"Szukaj"} onClick={handleSearch}></input>
            </div>
            <ul className='OfferBox'>
                {offersHTML}
            </ul>
        </>
    );
}

export default Home;