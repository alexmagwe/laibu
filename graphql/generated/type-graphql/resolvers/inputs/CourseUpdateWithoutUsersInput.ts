import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UnitUpdateManyWithoutCourseNestedInput } from "../inputs/UnitUpdateManyWithoutCourseNestedInput";

@TypeGraphQL.InputType("CourseUpdateWithoutUsersInput", {
  isAbstract: true
})
export class CourseUpdateWithoutUsersInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateManyWithoutCourseNestedInput, {
    nullable: true
  })
  units?: UnitUpdateManyWithoutCourseNestedInput | undefined;
}
