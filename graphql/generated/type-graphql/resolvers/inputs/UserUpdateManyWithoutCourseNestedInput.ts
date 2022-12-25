import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCourseInput } from "../inputs/UserCreateOrConnectWithoutCourseInput";
import { UserCreateWithoutCourseInput } from "../inputs/UserCreateWithoutCourseInput";
import { UserScalarWhereInput } from "../inputs/UserScalarWhereInput";
import { UserUpdateManyWithWhereWithoutCourseInput } from "../inputs/UserUpdateManyWithWhereWithoutCourseInput";
import { UserUpdateWithWhereUniqueWithoutCourseInput } from "../inputs/UserUpdateWithWhereUniqueWithoutCourseInput";
import { UserUpsertWithWhereUniqueWithoutCourseInput } from "../inputs/UserUpsertWithWhereUniqueWithoutCourseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateManyWithoutCourseNestedInput", {
  isAbstract: true
})
export class UserUpdateManyWithoutCourseNestedInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutCourseInput], {
    nullable: true
  })
  create?: UserCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpsertWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  upsert?: UserUpsertWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  set?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  delete?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  update?: UserUpdateWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserUpdateManyWithWhereWithoutCourseInput], {
    nullable: true
  })
  updateMany?: UserUpdateManyWithWhereWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UserScalarWhereInput[] | undefined;
}
