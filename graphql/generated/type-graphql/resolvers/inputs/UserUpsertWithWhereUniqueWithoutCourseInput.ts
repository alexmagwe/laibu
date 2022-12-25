import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCourseInput } from "../inputs/UserCreateWithoutCourseInput";
import { UserUpdateWithoutCourseInput } from "../inputs/UserUpdateWithoutCourseInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpsertWithWhereUniqueWithoutCourseInput", {
  isAbstract: true
})
export class UserUpsertWithWhereUniqueWithoutCourseInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCourseInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCourseInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCourseInput, {
    nullable: false
  })
  create!: UserCreateWithoutCourseInput;
}
