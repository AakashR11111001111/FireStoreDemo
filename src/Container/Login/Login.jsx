import { useRef } from 'react';
import styles from './Login.module.css'
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { userCtx } from '../../App';
const Login = () => {

    let fName = useRef("");

    let lName = useRef("");

    let pwd = useRef("");

    const navigate = useNavigate();

    const ctx = useContext(userCtx);
    
    const onFormSubmit = (e) => {
        e.preventDefault();
        fName = fName.current.value;
        lName = lName.current.value;
        pwd = pwd.current.value;
    }

    const onGoogleLogin = async () => {
        try{
            const res = await signInWithPopup(auth, googleAuthProvider)
            const userObj = {
                displayName: res.user.displayName,
                email: res.user.email,
                uid: res.user.uid, 
                photoURL: res.user.photoURL,
            }
            
            localStorage.setItem("UserDetails", JSON.stringify(userObj));
            ctx.setUser(userObj);
            navigate("/home")
        }catch(err){
            console.log(err);
        }
        
    }

    return (
        <div className={styles.main}>
            <div className={styles.formContainer}>
                <h1 className={styles.head}>Sign-In</h1>
                <form className={styles.form} action="">
                    <div className={styles.common}>
                        <label htmlFor="fName">First Name </label>
                        <input ref={fName} type="text" id='fName' placeholder='First Name' />
                    </div>
                    <div className={styles.common}>
                        <label htmlFor="lName">Last Name </label>
                        <input ref={lName} type="text" id='lName' placeholder='Last Name' />
                    </div>
                    <div className={styles.common}>
                        <label htmlFor="pass">Password</label>
                        <input ref={pwd} type="password" />
                    </div>
                    <button onClick={onFormSubmit}>Create Account</button>
                    <div onClick={onGoogleLogin} className={styles.logins}>
                        <div className={styles.googleLog}><svg viewBox="0 0 48 48" width="25px" height="25px"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg> <span className={styles.loginText}>Login With Google</span></div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;