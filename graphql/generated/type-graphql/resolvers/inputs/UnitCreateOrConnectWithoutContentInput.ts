import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutContentInput } from "../inputs/UnitCreateWithoutContentInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateOrConnectWithoutContentInput", {
  isAbstract: true
})
export class UnitCreateOrConnectWithoutContentInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutContentInput, {
    nullable: false
  })
  create!: UnitCreateWithoutContentInput;
}
