import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutQuestionsInput } from "../inputs/UnitCreateWithoutQuestionsInput";
import { UnitUpdateWithoutQuestionsInput } from "../inputs/UnitUpdateWithoutQuestionsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpsertWithWhereUniqueWithoutQuestionsInput", {
  isAbstract: true
})
export class UnitUpsertWithWhereUniqueWithoutQuestionsInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutQuestionsInput, {
    nullable: false
  })
  update!: UnitUpdateWithoutQuestionsInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutQuestionsInput, {
    nullable: false
  })
  create!: UnitCreateWithoutQuestionsInput;
}
