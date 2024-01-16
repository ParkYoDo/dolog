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

    USER: {
      FIND: {
        FIND_PASSWORD: '/auth/user/find/password',
      },
      ACTIVE: {
        ACTIVE: '/auth/user/active',
        ACTIVE_RESEND: '/auth/user/active/resend',
        DEACTIVATE: '/auth/user/active',
      },
      INVITE: {
        KINGDOM: '/auth/user/invite/workspace',
      },
    },
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
