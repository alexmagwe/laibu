import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutContentInput } from "../inputs/UnitCreateWithoutContentInput";
import { UnitUpdateWithoutContentInput } from "../inputs/UnitUpdateWithoutContentInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpsertWithWhereUniqueWithoutContentInput", {
  isAbstract: true
})
export class UnitUpsertWithWhereUniqueWithoutContentInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutContentInput, {
    nullable: false
  })
  update!: UnitUpdateWithoutContentInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutContentInput, {
    nullable: false
  })
  create!: UnitCreateWithoutContentInput;
}
