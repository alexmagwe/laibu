import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitUpdateWithoutLecturerInput } from "../inputs/UnitUpdateWithoutLecturerInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateWithWhereUniqueWithoutLecturerInput", {
  isAbstract: true
})
export class UnitUpdateWithWhereUniqueWithoutLecturerInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutLecturerInput, {
    nullable: false
  })
  data!: UnitUpdateWithoutLecturerInput;
}
