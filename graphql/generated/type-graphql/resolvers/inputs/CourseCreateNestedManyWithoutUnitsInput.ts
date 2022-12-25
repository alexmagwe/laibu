import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutUnitsInput } from "../inputs/CourseCreateOrConnectWithoutUnitsInput";
import { CourseCreateWithoutUnitsInput } from "../inputs/CourseCreateWithoutUnitsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedManyWithoutUnitsInput", {
  isAbstract: true
})
export class CourseCreateNestedManyWithoutUnitsInput {
  @TypeGraphQL.Field(_type => [CourseCreateWithoutUnitsInput], {
    nullable: true
  })
  create?: CourseCreateWithoutUnitsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseCreateOrConnectWithoutUnitsInput], {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutUnitsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseWhereUniqueInput[] | undefined;
}
