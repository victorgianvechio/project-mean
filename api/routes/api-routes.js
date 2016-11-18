'use strict';

module.exports = (router) => {

  const routes = {
    get: (route, method) => {
      require('./models/route-get')(router, route, method);
    },

    post: (route, method) => {
      require('./models/route-post')(router, route, method);
    },

    put: (route, method) => {
      require('./models/route-put')(router, route, method);
    },

    delete: (route, method) => {
      require('./models/route-delete')(router, route, method);
    }
  };
  return routes;
};
