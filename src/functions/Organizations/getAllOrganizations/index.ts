//import schema if any

export default {
  handler: "src/functions/Organizations/getAllOrganizations/handler.main",
  events: [
    {
      http: {
        method: "get",
        path: "getOrganizations",
      },
    },
  ],
};
