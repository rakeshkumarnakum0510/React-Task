import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const Login = () => {
    let navigate = useNavigate();
    const [items, setItems] = useState();
    const [name, setName] = useState("");
    
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('name'));
        if (items) {
            setItems(items);
        }
    }, []);

    const onhandleSubmit = (e) => {
        e.preventDefault();
        if(name==items){
            navigate('/dashboard');
        }else {
            navigate('/login');
            alert("please check your name")
            
        }
    }
    return (
    <>
        <h1>Login Page</h1>
        <form onSubmit={onhandleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Please Enter Password"
                aria-label="pass"
            />
            <input type="submit" value="Submit"></input>
        </form>

    </>
    )
}

export default Login;