module.exports = (router, route, method) => {
  router.delete(route, (req, res) => {
    method(req, res);
  });
};
