import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateNestedManyWithoutCourseInput } from "../inputs/UnitCreateNestedManyWithoutCourseInput";

@TypeGraphQL.InputType("CourseCreateWithoutUsersInput", {
  isAbstract: true
})
export class CourseCreateWithoutUsersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => UnitCreateNestedManyWithoutCourseInput, {
    nullable: true
  })
  units?: UnitCreateNestedManyWithoutCourseInput | undefined;
}
