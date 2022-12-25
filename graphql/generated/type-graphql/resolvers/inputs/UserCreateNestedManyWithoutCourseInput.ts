import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCourseInput } from "../inputs/UserCreateOrConnectWithoutCourseInput";
import { UserCreateWithoutCourseInput } from "../inputs/UserCreateWithoutCourseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedManyWithoutCourseInput", {
  isAbstract: true
})
export class UserCreateNestedManyWithoutCourseInput {
  @TypeGraphQL.Field(_type => [UserCreateWithoutCourseInput], {
    nullable: true
  })
  create?: UserCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereUniqueInput], {
    nullable: true
  })
  connect?: UserWhereUniqueInput[] | undefined;
}
