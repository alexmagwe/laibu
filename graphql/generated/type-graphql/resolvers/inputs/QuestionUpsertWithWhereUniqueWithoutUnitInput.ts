import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateWithoutUnitInput } from "../inputs/QuestionCreateWithoutUnitInput";
import { QuestionUpdateWithoutUnitInput } from "../inputs/QuestionUpdateWithoutUnitInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionUpsertWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class QuestionUpsertWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: false
  })
  where!: QuestionWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuestionUpdateWithoutUnitInput, {
    nullable: false
  })
  update!: QuestionUpdateWithoutUnitInput;

  @TypeGraphQL.Field(_type => QuestionCreateWithoutUnitInput, {
    nullable: false
  })
  create!: QuestionCreateWithoutUnitInput;
}
