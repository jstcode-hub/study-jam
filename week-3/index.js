const hapi = require('@hapi/hapi');
const { nanoid } = require('nanoid');

const post = require('./post');

const init = async () => {
  const server = hapi.server({
    port: 3000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/posts',
    handler: (req, res) => {
      post.get();

      return res.response({
        statusCode: 200,
        message: 'Success',
        data: post(),
      });
    },
  });

  server.route({
    method: 'POST',
    path: '/posts',
    handler: async (req, res) => {
      const id = nanoid();
      const title = req.payload.title;
      const content = req.payload.content;
      const author = req.payload.author;
      const date = req.payload.date;
      const tags = req.payload.tags;

      await post.save({ id, title, content, author, date, tags });

      return res.response({
        statusCode: 201,
        message: 'Success',
        data: [{ id, title, content, author, date, tags }],
      });
    },
  });

  server.route({});

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();
