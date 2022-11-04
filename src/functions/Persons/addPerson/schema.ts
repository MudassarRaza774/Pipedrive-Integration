export default {
  type: "object",
  properties: {
    name: { type: "string" },
    owner_id: { type: "number" },
    org_id: { type: "number" },
    email: [
      {
        value: { type: "string" },
        primary: { type: "boolean" },
        label: { type: "string" },
      },
    ],
    phone: [
      {
        value: { type: "string" },
        primary: { type: "boolean" },
        label: { type: "string" },
      },
    ],
    marketing_status: { type: "string" },
  },
  required: ["name", "owner_id", "org_id", "email", "phone"],
} as const;
