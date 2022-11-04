import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import pipedrive from "pipeDrive/config";
import schema from "./schema";

const getOrganizations: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async () => {
  const apiInstance = new pipedrive.OrganizationsApi();
  const result = await apiInstance.getOrganizations();

  return formatJSONResponse({
    message: result,
  });
};

export const main = middyfy(getOrganizations);
