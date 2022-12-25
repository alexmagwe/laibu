import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitUpdateWithoutQuestionsInput } from "../inputs/UnitUpdateWithoutQuestionsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateWithWhereUniqueWithoutQuestionsInput", {
  isAbstract: true
})
export class UnitUpdateWithWhereUniqueWithoutQuestionsInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutQuestionsInput, {
    nullable: false
  })
  data!: UnitUpdateWithoutQuestionsInput;
}
