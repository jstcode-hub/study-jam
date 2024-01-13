const fs = require('fs');

const savePost = (req) => {
  fs.writeFileSync('database/posts.json', JSON.stringify(req));
};

const get = async () => {
  const posts = fs.readFileSync('database/posts.json');

  return JSON.parse(posts);
};

const getById = async (id) => {
  const posts = await get();

  return posts.find((post) => post.id === id);
};

const save = async (req) => {
  const posts = await get();

  posts.push(req);

  savePost(posts);
};

const update = async (id, req) => {
  const posts = await get();

  const index = posts.findIndex((post) => post.id === id);

  if (index !== -1) {
    return;
  }

  const oldPost = posts[index];

  posts[index] = {
    id: oldPost.id,
    ...req,
  };

  savePost(posts);
};

const destroy = async (id) => {
  const posts = await get();

  const index = posts.findIndex((post) => post.id === id);

  posts.splice(index, 1);

  savePost(posts);
};

module.exports = { save, get, getById, update };
