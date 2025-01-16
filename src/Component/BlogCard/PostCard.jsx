import { useContext } from 'react';
import styles from './PostCard.module.css'
import { userCtx } from '../../App';
const PostCard = (props) => {
    const ctx = useContext(userCtx);
    console.log(ctx);
    
    return (
        <div className={styles.card}>
            <div className={styles.upper}>
                <img src={ctx.user.photoURL} alt="" />
                <p>{ctx.user.displayName}</p>
            </div>
            <h3>{props.title}</h3>
            <p className={styles.cap}>{props.caption}</p>
        </div>
    )
}
export default PostCard;