import schema from "./schema";

export default {
  handler: "src/functions/Persons/addPerson/handler.main",
  events: [
    {
      http: {
        method: "post",
        path: "addPerson",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
