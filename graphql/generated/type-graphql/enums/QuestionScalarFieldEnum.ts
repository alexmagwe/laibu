import * as TypeGraphQL from "type-graphql";

export enum QuestionScalarFieldEnum {
  id = "id",
  question = "question",
  answer = "answer",
  createdAt = "createdAt"
}
TypeGraphQL.registerEnumType(QuestionScalarFieldEnum, {
  name: "QuestionScalarFieldEnum",
  description: undefined,
});
