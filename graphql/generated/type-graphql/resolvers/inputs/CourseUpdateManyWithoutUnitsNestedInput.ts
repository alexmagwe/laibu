import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutUnitsInput } from "../inputs/CourseCreateOrConnectWithoutUnitsInput";
import { CourseCreateWithoutUnitsInput } from "../inputs/CourseCreateWithoutUnitsInput";
import { CourseScalarWhereInput } from "../inputs/CourseScalarWhereInput";
import { CourseUpdateManyWithWhereWithoutUnitsInput } from "../inputs/CourseUpdateManyWithWhereWithoutUnitsInput";
import { CourseUpdateWithWhereUniqueWithoutUnitsInput } from "../inputs/CourseUpdateWithWhereUniqueWithoutUnitsInput";
import { CourseUpsertWithWhereUniqueWithoutUnitsInput } from "../inputs/CourseUpsertWithWhereUniqueWithoutUnitsInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateManyWithoutUnitsNestedInput", {
  isAbstract: true
})
export class CourseUpdateManyWithoutUnitsNestedInput {
  @TypeGraphQL.Field(_type => [CourseCreateWithoutUnitsInput], {
    nullable: true
  })
  create?: CourseCreateWithoutUnitsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseCreateOrConnectWithoutUnitsInput], {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutUnitsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpsertWithWhereUniqueWithoutUnitsInput], {
    nullable: true
  })
  upsert?: CourseUpsertWithWhereUniqueWithoutUnitsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  set?: CourseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CourseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  delete?: CourseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpdateWithWhereUniqueWithoutUnitsInput], {
    nullable: true
  })
  update?: CourseUpdateWithWhereUniqueWithoutUnitsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpdateManyWithWhereWithoutUnitsInput], {
    nullable: true
  })
  updateMany?: CourseUpdateManyWithWhereWithoutUnitsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseScalarWhereInput[] | undefined;
}
