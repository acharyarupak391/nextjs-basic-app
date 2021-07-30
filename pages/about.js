import Head from "next/head"
import Link from "next/link"
import styles from "../styles/Home.module.css"

const About = (props) => {
  return (
    <>
    <Head>
      <title>About Page</title>
    </Head>
    <div className={styles.posts_container}>
    {
      props.posts.map(post => (
        <Link key={post.id} href={{
          pathname: "/post/[id]",
          query: {
            id: post.id
          }
        }} >
          <div className={styles.about_card}>
            <h3 className={styles.card_title}>{post.title}</h3>
            {/* <h5 className={styles.card_body}>{post.body}</h5> */}
          </div>
        </Link>
      ))
    }
    </div>
    </>
  )
}

export default About;

export const getStaticProps = async() => {
  let response;
  try{
    response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
    let posts = await response.json()
    return {
      props: {
        posts
      }
    }
  } catch(err) {
    console.log('Error: ', err);
    return null;
  }
}