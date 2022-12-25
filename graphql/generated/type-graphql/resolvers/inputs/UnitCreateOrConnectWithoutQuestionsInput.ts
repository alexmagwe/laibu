import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutQuestionsInput } from "../inputs/UnitCreateWithoutQuestionsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateOrConnectWithoutQuestionsInput", {
  isAbstract: true
})
export class UnitCreateOrConnectWithoutQuestionsInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutQuestionsInput, {
    nullable: false
  })
  create!: UnitCreateWithoutQuestionsInput;
}
