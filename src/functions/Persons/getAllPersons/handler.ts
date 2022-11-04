import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import pipedrive from "pipeDrive/config";
import schema from "./schema";

const getAllPersonsOfOrganizations: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async () => {
  try {
    const apiInstance = new pipedrive.PersonsApi();
    const persons = await apiInstance.getPersons();
    return formatJSONResponse({
      message: persons,
    });
  } catch (err) {
    console.log(err);
  }

  // return formatJSONResponse({
  //   // message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
  //   // event
  //   message: `Hello , welcome to the exciting Serverless world!@@`,
  // });
};

export const main = middyfy(getAllPersonsOfOrganizations);
