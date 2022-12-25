import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutLecturerInput } from "../inputs/UnitCreateWithoutLecturerInput";
import { UnitUpdateWithoutLecturerInput } from "../inputs/UnitUpdateWithoutLecturerInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpsertWithWhereUniqueWithoutLecturerInput", {
  isAbstract: true
})
export class UnitUpsertWithWhereUniqueWithoutLecturerInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutLecturerInput, {
    nullable: false
  })
  update!: UnitUpdateWithoutLecturerInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutLecturerInput, {
    nullable: false
  })
  create!: UnitCreateWithoutLecturerInput;
}
