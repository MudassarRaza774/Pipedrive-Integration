import schema from "./schema";
// import { handlerPath } from "@libs/handler-resolver";

export default {
  handler: "src/functions/Persons/getAllPersons/handler.main",
  events: [
    {
      http: {
        method: "get",
        path: "getPersons",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
