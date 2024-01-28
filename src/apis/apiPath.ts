const PATH = {
  MAIN: '/',
  LOGIN: '/login',
  NOTFOUND: '/*',

  AUTHENTICATION: {
    SIGNUP: '/auth/signup',
    SIGNOFF: '/auth/signoff',
    SIGNIN: '/auth/signin',
    SIGNOUT: '/auth/signout',
    SILENT_REFRESH: '/auth/silentRefresh',
  },

  POST: {
    PRESIGNED_URL: 'post/presigned-url',
    UPLOAD_POST: 'post',
    GET_POST: 'post',
    GET_ONE_POST: 'post',
  },

  MY: {
    INFO: '/api/my/info',
    UPDATE: '/api/my',
    MENU: '/api/menu',
    WORKSPACE: '/api/my/workspace',
    PRODUCT: '/api/my/product',
  },

  PRODUCT: {
    MENU: {
      ALL: '/api/product',
      GET: '/api/product',
      CREATE: '/api/product',
      UPDATE: '/api/product',
      DELETE: '/api/product',
    },
    GET: '/api/product',
    CREATE: '/api/product',
    UPDATE: '/api/product',
    DELETE: '/api/product',
  },

  FRONT: 1,
  BACK: -1,
};

export default PATH;
