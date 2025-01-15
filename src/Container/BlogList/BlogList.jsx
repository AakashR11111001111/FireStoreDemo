import { collection, getDocs } from 'firebase/firestore';
import styles from './BlogList.module.css'
import { fireStore } from '../../config/firebase';
import { useEffect, useState } from 'react';
import PostCard from '../../Component/BlogCard/PostCard';
const BlogList = () => {
    const postCollection = collection(fireStore,"posts")
    const [postList, setPostList] = useState([]);
    useEffect(()=>{
        const fetchPosts = async () => {
            try{
                const posts = await getDocs(postCollection);
                const postToShow = posts.docs.map(post => ({...post.data()}))
                setPostList(postToShow);
                
            }catch(err){
                console.log("ERROR Fetching Posts. ",err);
                
            }
        }
        fetchPosts();
    },[])
    return (
        <div className={styles.main}>
            {
                postList.map((post,idx) => <PostCard key={idx} {...post} />)
            }
        </div>
    )
}
export default BlogList;