import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCreateOrConnectWithoutUsersInput } from "../inputs/CourseCreateOrConnectWithoutUsersInput";
import { CourseCreateWithoutUsersInput } from "../inputs/CourseCreateWithoutUsersInput";
import { CourseWhereUniqueInput } from "../inputs/CourseWhereUniqueInput";

@TypeGraphQL.InputType("CourseCreateNestedManyWithoutUsersInput", {
  isAbstract: true
})
export class CourseCreateNestedManyWithoutUsersInput {
  @TypeGraphQL.Field(_type => [CourseCreateWithoutUsersInput], {
    nullable: true
  })
  create?: CourseCreateWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseCreateOrConnectWithoutUsersInput], {
    nullable: true
  })
  connectOrCreate?: CourseCreateOrConnectWithoutUsersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseWhereUniqueInput], {
    nullable: true
  })
  connect?: CourseWhereUniqueInput[] | undefined;
}
