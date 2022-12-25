import * as TypeGraphQL from "type-graphql";

export enum ContentScalarFieldEnum {
  id = "id",
  name = "name",
  size = "size",
  uploadDate = "uploadDate",
  hidden = "hidden",
  url = "url",
  type = "type"
}
TypeGraphQL.registerEnumType(ContentScalarFieldEnum, {
  name: "ContentScalarFieldEnum",
  description: undefined,
});
