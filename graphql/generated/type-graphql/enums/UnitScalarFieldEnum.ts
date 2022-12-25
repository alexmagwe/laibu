import * as TypeGraphQL from "type-graphql";

export enum UnitScalarFieldEnum {
  id = "id",
  name = "name",
  code = "code",
  year = "year",
  semester = "semester",
  lecturerId = "lecturerId"
}
TypeGraphQL.registerEnumType(UnitScalarFieldEnum, {
  name: "UnitScalarFieldEnum",
  description: undefined,
});
