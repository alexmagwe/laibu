import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UnitUpdateManyWithoutCourseNestedInput } from "../inputs/UnitUpdateManyWithoutCourseNestedInput";
import { UserUpdateManyWithoutCourseNestedInput } from "../inputs/UserUpdateManyWithoutCourseNestedInput";

@TypeGraphQL.InputType("CourseUpdateInput", {
  isAbstract: true
})
export class CourseUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateManyWithoutCourseNestedInput, {
    nullable: true
  })
  users?: UserUpdateManyWithoutCourseNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UnitUpdateManyWithoutCourseNestedInput, {
    nullable: true
  })
  units?: UnitUpdateManyWithoutCourseNestedInput | undefined;
}
