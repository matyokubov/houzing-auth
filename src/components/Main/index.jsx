import { Container, Form, Submit, Remember, Select } from "./style";
import { Input } from "../Styled"
import { useContext } from "react";
import { ContextAPI } from "../../context"
import { useState } from "react";

const Main = () => {
    const {show} = useContext(ContextAPI)
    const [loginData, setLoginData] = useState({})
    const [regData, setRegData] = useState({})
    const onChangeLoginData = ({target}) => {
        setLoginData({...loginData, [target.name]: target.value})
    }
    const onChangeRegData = ({target}) => {
        setRegData({...regData, [target.name]: target.value})
    }
    const setRole = ({target}) => {
        setRegData({...regData, "roleIdSet": [target.value]})
    }
    const login = () => {
        console.log(loginData);
        fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })
            .then((data) => data.json())
            .then((res) => {
                if(res.authenticationToken){
                    console.log(res)
                } else alert("Unknown error")
            })
            .catch((error) => alert(error.toString().includes("SyntaxError") ? `Email or password incorrect` : "Unknown error"))
    }
    const register = () => {
        console.log(regData, JSON.stringify(regData), regData.password === regData.rePassword, Object.values(regData).length === 6, Object.values(regData).every((i)=>i), regData.password);
        if(regData.password === regData.rePassword && Object.values(regData).length === 6 && Object.values(regData).every((i)=>i) && regData.password){
            fetch("https://houzing-app.herokuapp.com/api/public/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(regData)
            })
                .then((data) => data.json())
                .then((res) => {
                    alert(res.message ? res.message : "Unknown error")
                    console.log("rthen");
                })
                .catch((error) => {
                    alert(!error.toString().includes("SyntaxError") ? `Xatoliik - ${JSON.stringify(error)}` : `Sent your verification link to ${regData.email}\n - Open link\n - Leave Sign in page and login`)
                    console.log("rcatch");
                })
        } else alert("All data in not filled")
    }
    const forgot = () => {
        let email = prompt("Enter current email")
        email && fetch(`https://houzing-app.herokuapp.com/api/public/forgot-password?email=${email}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then((data) => data.json())
                .then((res) => {
                    console.log(res, JSON.stringify({email}));
                    alert(res.success ? res.message : "Unknown error")
                })
    }
    return (
        <Container>
            <Form showForm={show}>
                <h2>Sign in</h2>
                <Input name="email" theme="classic" type="text" placeholder="Email" onChange={onChangeLoginData}/>
                <Input name="password" theme="classic" type="text" placeholder="Password" className="mb16" onChange={onChangeLoginData}/>
                <Remember>
                    <span className="check">
                        <input type="checkbox" name="remember" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </span>
                    <span className="forgot">
                        <span onClick={forgot}>Forgot</span>
                    </span>
                </Remember>
                <Submit onClick={login}>Login</Submit>
            </Form>
            <Form showForm={!show}>
                <h2>Registration</h2>
                <Input name="firstname" theme="classic" type="text" placeholder="First name" onChange={onChangeRegData}/>
                <Input name="lastname" theme="classic" type="text" placeholder="Last name" onChange={onChangeRegData}/>
                <Input name="email" theme="classic" type="text" placeholder="Email" onChange={onChangeRegData}/>
                <Select name="userRole" onChange={setRole}>
                    <option value={null}>User role</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Select>
                <Input name="password" theme="classic" type="text" placeholder="Password" onChange={onChangeRegData}/>
                <Input name="rePassword" theme="classic" type="text" placeholder="Re-enter password" onChange={onChangeRegData}/>
                <Submit onClick={register}>Register</Submit>
            </Form>
        </Container>
    )
}

export default Main;