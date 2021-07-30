import styles from "../../styles/Home.module.css"
import Head from "next/head"

const Post = ({ post }) => {
  return (
    <>
    <Head><title>Post {post.id}</title></Head>
    <div className={styles.post_card} style={{cursor: "default"}}>
      <div className={styles.id_div}>
        <span className={styles.id}>Post: {post.id}</span>
        <span className={styles.id}>User ID: {post.userId}</span>
      </div>
      <h3 className={styles.card_title}>{post.title}</h3>
      <h5 className={styles.card_body}>{post.body}</h5>
    </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let _id = context.query.id;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${_id}`);
    const post = await response.json();
    return {
      props: {
        post: post
      }
    }
  } catch(err) {
    return {
      props: {
        error: err
      }
    }
  }
}

export default Post;