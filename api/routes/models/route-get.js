module.exports = (router, route, method) => {
  router.get(route, (req, res) => {
    method(req, res);
  });
};
