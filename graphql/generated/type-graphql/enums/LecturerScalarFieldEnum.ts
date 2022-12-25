import * as TypeGraphQL from "type-graphql";

export enum LecturerScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  contactInfo = "contactInfo"
}
TypeGraphQL.registerEnumType(LecturerScalarFieldEnum, {
  name: "LecturerScalarFieldEnum",
  description: undefined,
});
