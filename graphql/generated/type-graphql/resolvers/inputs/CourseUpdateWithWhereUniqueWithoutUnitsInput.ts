import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateWithoutUnitsInput } from "../inputs/CourseUpdateWithoutUnitsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateWithWhereUniqueWithoutUnitsInput", {
  isAbstract: true
})
export class CourseUpdateWithWhereUniqueWithoutUnitsInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutUnitsInput, {
    nullable: false
  })
  data!: CourseUpdateWithoutUnitsInput;
}
