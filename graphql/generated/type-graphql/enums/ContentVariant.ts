import * as TypeGraphQL from "type-graphql";

export enum ContentVariant {
  Video = "Video",
  Assignment = "Assignment",
  Content = "Content"
}
TypeGraphQL.registerEnumType(ContentVariant, {
  name: "ContentVariant",
  description: undefined,
});
