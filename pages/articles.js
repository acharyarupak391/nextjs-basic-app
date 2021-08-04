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
          pathname: "/article/[id]",
          query: {
            id: post.id
          }
        }} >
          <div className={styles.about_card}>
            <h4 className={styles.card_title1}>{post.title}</h4>
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
    // response = await fetch("https://jsonplaceholder.typicode.com/posts");
    response = await fetch("http://localhost:3000/api/articles");
    let data = await response.json()
    return {
      props: {
        posts: data.posts
      }
    }
  } catch(err) {
    console.log('Error: ', err);
    return null;
  }
}