import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateWithoutCourseInput } from "../inputs/UnitCreateWithoutCourseInput";
import { UnitUpdateWithoutCourseInput } from "../inputs/UnitUpdateWithoutCourseInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpsertWithWhereUniqueWithoutCourseInput", {
  isAbstract: true
})
export class UnitUpsertWithWhereUniqueWithoutCourseInput {
  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: false
  })
  where!: UnitWhereUniqueInput;

  @TypeGraphQL.Field(_type => UnitUpdateWithoutCourseInput, {
    nullable: false
  })
  update!: UnitUpdateWithoutCourseInput;

  @TypeGraphQL.Field(_type => UnitCreateWithoutCourseInput, {
    nullable: false
  })
  create!: UnitCreateWithoutCourseInput;
}
