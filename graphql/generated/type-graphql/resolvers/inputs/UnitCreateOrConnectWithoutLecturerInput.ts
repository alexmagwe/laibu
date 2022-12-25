import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutLecturerInput } from "../inputs/UnitCreateWithoutLecturerInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateOrConnectWithoutLecturerInput", {
  isAbstract: true
})
export class UnitCreateOrConnectWithoutLecturerInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutLecturerInput, {
    nullable: false
  })
  create!: UnitCreateWithoutLecturerInput;
}
