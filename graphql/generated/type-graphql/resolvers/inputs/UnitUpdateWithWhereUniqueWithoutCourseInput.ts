import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitUpdateWithoutCourseInput } from "../inputs/UnitUpdateWithoutCourseInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateWithWhereUniqueWithoutCourseInput", {
  isAbstract: true
})
export class UnitUpdateWithWhereUniqueWithoutCourseInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutCourseInput, {
    nullable: false
  })
  data!: UnitUpdateWithoutCourseInput;
}
