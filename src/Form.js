import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {

    let navigate = useNavigate();
    const [name, setName] = useState("");
    const onhandleSubmit = (e) => {
    e.preventDefault();
    if(name!==""){
    localStorage.setItem('name', JSON.stringify(name));
    setName([]);
    navigate('/login');
    }else {
        alert("Please fill the form")
    }
 }

    return(
        <>
        <h1>Registration Form</h1>
    <form onSubmit={onhandleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        aria-label="name"
      /><br></br><br></br>

      <input type="submit" value="Submit"></input>
    </form>
     
        </>
    )

}

export default Form;