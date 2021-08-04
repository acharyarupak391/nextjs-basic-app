import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link"

const Article = ({ post }) => {
  return (
    <>
      <Head>
        <title>Post {post.id}</title>
      </Head>
      <div className={styles.post_card} style={{ cursor: "default" }}>
        <div className={styles.id_div}>
          <span className={styles.id}>Post: {post.id}</span>
          <span className={styles.id}>User ID: {post.userId}</span>
        </div>
        <h3 className={styles.card_title}>{post.title}</h3>
        <h5 className={styles.card_body}>{post.body}</h5>
      </div>
      <Link href="/articles">
        <div className={styles.back_container}>
          {/* <span className={styles.back_arrow}>
            {"<"}
          </span> */}
          <span className={styles.back_text}>Back to Articles</span>
        </div>
      </Link>
    </>
  );
};

// export async function getServerSideProps(context) {
export async function getStaticProps(context) {
  let _id = context.params.id;
  try {
    const res = await fetch(`http://localhost:3000/api/article/${_id}`)
    const data = await res.json();
    return {
      props: {
        post: data.post,
      },
    };
  } catch (err) {
    return {
      props: {
        error: err,
      },
    };
  }
}

export async function getStaticPaths(context) {
  const postArray = new Array(100)
    .fill(0)
    .map((_, i) => ({ params: { id: (i + 1).toString() } }));
  return {
    paths: postArray,
    fallback: false,
  };
}

export default Article;
