import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutUnitsInput } from "../inputs/CourseCreateWithoutUnitsInput";
import { CourseUpdateWithoutUnitsInput } from "../inputs/CourseUpdateWithoutUnitsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpsertWithWhereUniqueWithoutUnitsInput", {
  isAbstract: true
})
export class CourseUpsertWithWhereUniqueWithoutUnitsInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutUnitsInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutUnitsInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutUnitsInput, {
    nullable: false
  })
  create!: CourseCreateWithoutUnitsInput;
}
