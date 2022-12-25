import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutUsersInput } from "../inputs/CourseCreateWithoutUsersInput";
import { CourseUpdateWithoutUsersInput } from "../inputs/CourseUpdateWithoutUsersInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpsertWithWhereUniqueWithoutUsersInput", {
  isAbstract: true
})
export class CourseUpsertWithWhereUniqueWithoutUsersInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseUpdateWithoutUsersInput, {
    nullable: false
  })
  update!: CourseUpdateWithoutUsersInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutUsersInput, {
    nullable: false
  })
  create!: CourseCreateWithoutUsersInput;
}
