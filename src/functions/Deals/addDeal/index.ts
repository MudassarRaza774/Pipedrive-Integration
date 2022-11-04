import schema from "./schema";

export default {
  handler: "src/functions/Deals/addDeal/handler.main",
  events: [
    {
      http: {
        method: "post",
        path: "addDeal",
        request: {
          schemas: {
            "application/json": schema,
          },
        },
      },
    },
  ],
};
