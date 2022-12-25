import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitUpdateWithoutContentInput } from "../inputs/UnitUpdateWithoutContentInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateWithWhereUniqueWithoutContentInput", {
  isAbstract: true
})
export class UnitUpdateWithWhereUniqueWithoutContentInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutContentInput, {
    nullable: false
  })
  data!: UnitUpdateWithoutContentInput;
}
