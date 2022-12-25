import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateNestedManyWithoutUnitsInput } from "../inputs/CourseCreateNestedManyWithoutUnitsInput";
import { LecturerCreateNestedOneWithoutUnitInput } from "../inputs/LecturerCreateNestedOneWithoutUnitInput";
import { QuestionCreateNestedManyWithoutUnitInput } from "../inputs/QuestionCreateNestedManyWithoutUnitInput";

@TypeGraphQL.InputType("UnitCreateWithoutContentInput", {
  isAbstract: true
})
export class UnitCreateWithoutContentInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => CourseCreateNestedManyWithoutUnitsInput, {
    nullable: true
  })
  course?: CourseCreateNestedManyWithoutUnitsInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  year!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  semester!: number;

  @TypeGraphQL.Field(_type => LecturerCreateNestedOneWithoutUnitInput, {
    nullable: false
  })
  lecturer!: LecturerCreateNestedOneWithoutUnitInput;

  @TypeGraphQL.Field(_type => QuestionCreateNestedManyWithoutUnitInput, {
    nullable: true
  })
  questions?: QuestionCreateNestedManyWithoutUnitInput | undefined;
}
