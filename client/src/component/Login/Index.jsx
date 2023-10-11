import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let data={
      email,
      password
    }
    function log(){
        window.location.href = "http://localhost:5173/todo"
      }
    

    function submit(){
       
        axios.post("http://localhost:3000/checkuser",data).then((res)=>{
         
          if(res.data){
            alert("login success");
           log();
  
          }
          else{
            alert("wrong username or password");
          }
        
      
        })
      }
    
    

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
                            onChange={(e) => setEmail(e.target.value)}
							value={email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
                            onChange={(e) => setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						
						<button  className={styles.green_btn}  onClick={submit}>
							Login
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;