let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

export const getTodos = (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
};

export const createTodo = (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: "Testing, Testing, Testing",
  };

  posts.push(newPost);
  res.status(201).json(posts);
};
