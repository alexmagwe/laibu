import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionWhereUniqueInput } from "../../../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneQuestionArgs {
  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: false
  })
  where!: QuestionWhereUniqueInput;
}
