import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutQuestionsInput } from "../inputs/UnitCreateOrConnectWithoutQuestionsInput";
import { UnitCreateWithoutQuestionsInput } from "../inputs/UnitCreateWithoutQuestionsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateNestedManyWithoutQuestionsInput", {
  isAbstract: true
})
export class UnitCreateNestedManyWithoutQuestionsInput {
  @TypeGraphQL.Field(_type => [UnitCreateWithoutQuestionsInput], {
    nullable: true
  })
  create?: UnitCreateWithoutQuestionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitCreateOrConnectWithoutQuestionsInput], {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutQuestionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereUniqueInput], {
    nullable: true
  })
  connect?: UnitWhereUniqueInput[] | undefined;
}
