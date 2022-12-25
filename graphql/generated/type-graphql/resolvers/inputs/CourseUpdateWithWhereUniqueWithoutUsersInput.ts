import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseUpdateWithoutUsersInput } from "../inputs/CourseUpdateWithoutUsersInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class CourseUpdateWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutUsersInput, {
    nullable: false
  })
  data!: CourseUpdateWithoutUsersInput;
}
