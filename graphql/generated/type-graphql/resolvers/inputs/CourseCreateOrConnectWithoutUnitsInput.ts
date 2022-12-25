import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateWithoutUnitsInput } from "../inputs/CourseCreateWithoutUnitsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateOrConnectWithoutUnitsInput", {
  isAbstract: true
})
export class CourseCreateOrConnectWithoutUnitsInput {
  @TypeGraphQL.Field(_type => CourseWhereUniqueInput, {
    nullable: false
  })
  where!: CourseWhereUniqueInput;

  @TypeGraphQL.Field(_type => CourseCreateWithoutUnitsInput, {
    nullable: false
  })
  create!: CourseCreateWithoutUnitsInput;
}
