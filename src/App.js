import email from './assets/email.svg';
import location from './assets/location.svg';
import phone from './assets/phone.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";



function App() {

const [user, setUser] = useState([])
const [city, setCity] = useState("")
const [age, setAge] = useState("") 
const [date, setDate] = useState("") 
const [image, setImage] = useState("") 
const [first, setFirst] = useState("") 
const [last, setLast] = useState("") 
const [title, setTitle] = useState("") 

const baseUrl = "https://randomuser.me/api/";

const axiosTasks = async () => {
const res = await axios.get(baseUrl);
console.log(res);
setUser(res.data.results[0]);
setCity(res.data.results[0].location.city)
setAge(res.data.results[0].dob.age)
setDate(res.data.results[0].registered.date.slice(0,10))
setImage(res.data.results[0].picture.large)
setFirst(res.data.results[0].name.first)
setLast(res.data.results[0].name.last)
setTitle(res.data.results[0].name.title)
};

useEffect(() => {
  axiosTasks();
}, []);


  return (
    <>
 <div className="card-container">
        <img className="img1" src={image} alt="" />
        <p className='name'>{title}. {first} {last}</p>
        <img className="img" src={email} alt="" />
        <p> {user.email} </p>
        <img className="img" src={phone} alt="" />
        <p>{user.phone}</p>
        <img className="img" src={location} alt="" />
        <p>{city}</p>
        <div className="footer">
          <p>Age: {age}  </p>
          <p>Register Date: {date} </p>
        </div>
      </div>
  
      <button onClick={() => axiosTasks()}>Random User</button>
    </>
  );
}

export default App;