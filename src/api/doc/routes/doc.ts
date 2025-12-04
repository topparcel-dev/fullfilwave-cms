export default {
  routes: [
    {
     method: 'GET',
     path: '/doc',
     handler: 'doc.loadJson',
     config: {
       policies: [],
       middlewares: [],
			 auth: false,
     },
    },
  ],
};
