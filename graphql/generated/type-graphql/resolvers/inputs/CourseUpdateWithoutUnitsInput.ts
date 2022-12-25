import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateManyWithoutCourseNestedInput } from "../inputs/UserUpdateManyWithoutCourseNestedInput";

@TypeGraphQL.InputType("CourseUpdateWithoutUnitsInput", {
  isAbstract: true
})
export class CourseUpdateWithoutUnitsInput {
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
}
