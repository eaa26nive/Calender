import { useEffect, useState } from 'react';
import '../App.css'
import EventList from '../Components/EventList';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import myimage from '../assets/calenderimage.jpg';
import Searchfield from '../Components/Searchfield';

const events = [
  {id: 1, title: "Meeting", date: "2026-01-22", description: "About party in Aarhus"},
  {id: 2, title: "Workshop", date: "2026-03-23", description: "Designing a new app"},
   {id: 3, title: "Party", date: "2026-02-23", description: "Going crazy"},
   {id: 4, title: "Pottery class", date: "2026-09-09", description: "Get creative"},
   { id: 5, title: "Planning Meeting", date: "2026-02-05", description: "Quarterly planning session" },
{ id: 6, title: "Course", date: "2026-03-12", description: "Advanced JavaScript course" }
];

function DefaultPage() {

  // Looks for information in webstorage, if there are some,
  //filterText is equal to this value, else it is an empty string,
  const [filterText, setFilterText] = useState( (T) => {
    const savedFilter = localStorage.getItem("filterTextinStorage");
    return savedFilter ? savedFilter : "";
  });

  // Everytime the filterText variable changes, the information is saved to webstorage, with the key "filterTextinStorage"
  useEffect (() => {
localStorage.setItem("filterTextinStorage", filterText)
  }, [filterText])

  const sortedEvents = events.toSorted((a,b) =>
    a.date.localeCompare(b.date, "en", {sensitivity: "base"})
);

//Filter events based on the user input
const filteredevents = sortedEvents.filter(event => 
  event.title.toLowerCase().includes(filterText.toLowerCase()) ||
  event.description.toLowerCase().includes(filterText.toLowerCase())
);

// Event handler function
// Change on the value of variable "filtertext"
// makes the component re-render.
//function handleInputChange(event) {...}
const handleInputChange = (event) => {
  setFilterText(event.target.value);
}


  return (
    <div>
      <img src={myimage} alt="this is my image of a flower field"/>
      <Header/>
      <Searchfield handleinput={handleInputChange} filter={filterText}/>
      <EventList events={filteredevents}/>
 <Footer/>
    </div>
  )
}

export default DefaultPage
