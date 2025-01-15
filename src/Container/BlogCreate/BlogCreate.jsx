import { collection, addDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

import { fireStore } from '../../config/firebase';
import styles from './BlogCreate.module.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
const BlogCreate = () => {
    const navigate = useNavigate();
    const titleRef = useRef();
    const captionRef = useRef();

    const PostsCollection = collection(fireStore,"posts")
    
    const onPostBtnClicked = async (e) => {
        e.preventDefault();
        const Post = {
            title: titleRef.current.value,
            caption: captionRef.current.value,
            likes: 0
        }

        // add Post to DataBase / save data to firebase
        try{
            await addDoc(PostsCollection, Post) 
            alert("Post Successful");
            navigate("/home");
        }catch(err){
            console.log("Error => ",err);
        }
        
    }

    return (
        <div className={styles.main}>
            <h2 className={styles.mainHead}>Create A New Post</h2>
            <form onSubmit={onPostBtnClicked} className={styles.form2} action="">
                <div className={styles.tit}>
                    <label htmlFor="title">Title</label>
                    <input ref={titleRef} type="text" id='title' placeholder='Title' />
                </div>
                <div className={styles.cap}>
                    <label htmlFor="cap">Caption</label>
                    <textarea ref={captionRef} name="" id="cap"></textarea>
                </div>
                <button className={styles.postBtn}>Post</button>
            </form>
           
        </div>
    )
}
export default BlogCreate;