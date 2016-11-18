module.exports = (router, route, method) => {
  router.post(route, (req, res) => {
    method(req, res);
  });
};
