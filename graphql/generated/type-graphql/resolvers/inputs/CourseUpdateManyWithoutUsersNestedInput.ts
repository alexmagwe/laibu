import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutUsersInput } from "../inputs/CourseCreateOrConnectWithoutUsersInput";
import { CourseCreateWithoutUsersInput } from "../inputs/CourseCreateWithoutUsersInput";
import { CourseScalarWhereInput } from "../inputs/CourseScalarWhereInput";
import { CourseUpdateManyWithWhereWithoutUsersInput } from "../inputs/CourseUpdateManyWithWhereWithoutUsersInput";
import { CourseUpdateWithWhereUniqueWithoutUsersInput } from "../inputs/CourseUpdateWithWhereUniqueWithoutUsersInput";
import { CourseUpsertWithWhereUniqueWithoutUsersInput } from "../inputs/CourseUpsertWithWhereUniqueWithoutUsersInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseUpdateManyWithoutUsersNestedInput", {
  isAbstract: true
})
export class CourseUpdateManyWithoutUsersNestedInput {
  @TypeGraphQL.Field(_type => [CourseCreateWithoutUsersInput], {
    nullable: true
  })
  create?: CourseCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpsertWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  upsert?: CourseUpsertWithWhereUniqueWithoutUsersInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [CourseUpdateWithWhereUniqueWithoutUsersInput], {
    nullable: true
  })
  update?: CourseUpdateWithWhereUniqueWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseUpdateManyWithWhereWithoutUsersInput], {
    nullable: true
  })
  updateMany?: CourseUpdateManyWithWhereWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CourseScalarWhereInput[] | undefined;
}
