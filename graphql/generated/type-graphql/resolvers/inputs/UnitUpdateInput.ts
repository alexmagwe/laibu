import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentUpdateManyWithoutUnitNestedInput } from "../inputs/ContentUpdateManyWithoutUnitNestedInput";
import { CourseUpdateManyWithoutUnitsNestedInput } from "../inputs/CourseUpdateManyWithoutUnitsNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LecturerUpdateOneRequiredWithoutUnitNestedInput } from "../inputs/LecturerUpdateOneRequiredWithoutUnitNestedInput";
import { QuestionUpdateManyWithoutUnitNestedInput } from "../inputs/QuestionUpdateManyWithoutUnitNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UnitUpdateInput", {
  isAbstract: true
})
export class UnitUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CourseUpdateManyWithoutUnitsNestedInput, {
    nullable: true
  })
  course?: CourseUpdateManyWithoutUnitsNestedInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  code?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  year?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  semester?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ContentUpdateManyWithoutUnitNestedInput, {
    nullable: true
  })
  content?: ContentUpdateManyWithoutUnitNestedInput | undefined;

  @TypeGraphQL.Field(_type => LecturerUpdateOneRequiredWithoutUnitNestedInput, {
    nullable: true
  })
  lecturer?: LecturerUpdateOneRequiredWithoutUnitNestedInput | undefined;

  @TypeGraphQL.Field(_type => QuestionUpdateManyWithoutUnitNestedInput, {
    nullable: true
  })
  questions?: QuestionUpdateManyWithoutUnitNestedInput | undefined;
}
