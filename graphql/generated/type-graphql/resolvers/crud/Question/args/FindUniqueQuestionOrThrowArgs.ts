import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { QuestionWhereUniqueInput } from "../../../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueQuestionOrThrowArgs {
  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: false
  })
  where!: QuestionWhereUniqueInput;
}
