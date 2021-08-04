export default async function handler(req, res) {
  let data = {};
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    data.status = 200;
    data.posts = json;
  } catch(err) {
    data.status = 500;
    data.error = err;
  }
  res.status(data.status).json({ ...data });
}
