export default async function handler(req, res) {
  let data = {};
  let postId = req.query.id;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const json = await res.json();
    data.status = 200;
    data.post = json;
  } catch(err) {
    data.status = 500;
    data.error = err;
  }
  res.status(data.status).json({ ...data });
}