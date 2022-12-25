import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedManyWithoutCourseInput } from "../inputs/UserCreateNestedManyWithoutCourseInput";

@TypeGraphQL.InputType("CourseCreateWithoutUnitsInput", {
  isAbstract: true
})
export class CourseCreateWithoutUnitsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedManyWithoutCourseInput, {
    nullable: true
  })
  users?: UserCreateNestedManyWithoutCourseInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;
}
