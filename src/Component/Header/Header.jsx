import { useContext } from 'react';
import styles from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { userCtx } from '../../App';
const Header = () => {
    const ctx = useContext(userCtx);
    const navigate = useNavigate();
    const img = ctx.user.photoURL;
    const profName = ctx.user.displayName;
    
    const onSignOut = () => {
        localStorage.removeItem("UserDetails");
        navigate("/");
    }
    return (
        <>
            <div className={styles.nav}>
                <ul>
                    <li><NavLink  to={"/home"} className={({ isActive }) => isActive ? styles.isActive : styles.notActive}>Home</NavLink></li>
                    <li><NavLink to={"/create"} className={({ isActive }) => isActive ? styles.isActive : styles.notActive} >Create a New Post</NavLink></li>
                </ul>
                <div>
                    <div className={styles.prof}>
                        <img src={img} alt="profile image" />
                        <h6>{profName && profName.split(" ")}</h6>
                        <button onClick={onSignOut} className={styles.signout}>Sign Out</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;