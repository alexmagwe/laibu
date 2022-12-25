import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateWithoutUnitInput } from "../inputs/QuestionCreateWithoutUnitInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionCreateOrConnectWithoutUnitInput", {
  isAbstract: true
})
export class QuestionCreateOrConnectWithoutUnitInput {
  @TypeGraphQL.Field(_type => QuestionWhereUniqueInput, {
    nullable: false
  })
  where!: QuestionWhereUniqueInput;

  @TypeGraphQL.Field(_type => QuestionCreateWithoutUnitInput, {
    nullable: false
  })
  create!: QuestionCreateWithoutUnitInput;
}
