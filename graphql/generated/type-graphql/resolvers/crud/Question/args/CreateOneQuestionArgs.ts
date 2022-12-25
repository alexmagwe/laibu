import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionCreateInput } from "../../../inputs/QuestionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneQuestionArgs {
  @TypeGraphQL.Field(_type => QuestionCreateInput, {
    nullable: false
  })
  data!: QuestionCreateInput;
}
