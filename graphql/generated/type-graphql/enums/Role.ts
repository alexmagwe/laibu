import * as TypeGraphQL from "type-graphql";

export enum Role {
  Moderator = "Moderator",
  Student = "Student"
}
TypeGraphQL.registerEnumType(Role, {
  name: "Role",
  description: undefined,
});
