module.exports = (router, route, method) => {
  router.put(route, (req, res) => {
    method(req, res);
  });
};
