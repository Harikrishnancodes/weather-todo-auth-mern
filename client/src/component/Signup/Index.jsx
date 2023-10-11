import { useState } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
    const [name,setUsername] = useState('')
    const [email,setemail] = useState('')
    const [password,setPass] = useState('')
    let data = {
        name,
        email,
        password
    }
    function clicked(){
        console.log(data);
        axios.post("http://localhost:3000/signup",data).then((res)=>{
            console.log(res.data);
        })
    }

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/">
						<button type="button" className={styles.white_btn}>
							Login
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} >
						<h1>Create Account</h1>
						<input
							type="text"
                            placeholder="username"
                            onChange={(e)=>setUsername(e.target.value)}
							
							required
							className={styles.input}
						/>
						
						<input
						  type="Email"
                          placeholder="Email"
                          onChange={(e)=>setemail(e.target.value)}
							required
							className={styles.input}
						/>
						<input
							 type="password"
                             placeholder="Password"  
                             onChange={(e)=>setPass(e.target.value)}
							required
							className={styles.input}
						/>
						
						<button type="submit" className={styles.green_btn} onClick={clicked}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;