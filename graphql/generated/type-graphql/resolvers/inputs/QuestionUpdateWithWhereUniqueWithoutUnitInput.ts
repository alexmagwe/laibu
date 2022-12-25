import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionUpdateWithoutUnitInput } from "../inputs/QuestionUpdateWithoutUnitInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionUpdateWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class QuestionUpdateWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: false
  })
  where!: QuestionWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuestionUpdateWithoutUnitInput, {
    nullable: false
  })
  data!: QuestionUpdateWithoutUnitInput;
}
