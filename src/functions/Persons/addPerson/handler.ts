import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import pipedrive from "pipeDrive/config";

import schema from "./schema";

const addPerson: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const apiIntance = new pipedrive.PersonsApi();
  const { name, org_id, owner_id, phone, email } = event.body;
  console.log(
    `name: ${name}, org_id:${org_id}, phone:${phone}, email:${email}, ownerId:${owner_id}`
  );
  let opts = pipedrive.NewPerson.constructFromObject({
    name,
    org_id,
    owner_id,
    phone,
    email,
  });

  const addPerson = await apiIntance.addPerson(opts);

  return formatJSONResponse({
    message: addPerson,
  });
};

export const main = middyfy(addPerson);
