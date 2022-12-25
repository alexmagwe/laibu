import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutCourseInput } from "../inputs/UnitCreateOrConnectWithoutCourseInput";
import { UnitCreateWithoutCourseInput } from "../inputs/UnitCreateWithoutCourseInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateNestedManyWithoutCourseInput", {
  isAbstract: true
})
export class UnitCreateNestedManyWithoutCourseInput {
  @TypeGraphQL.Field(_type => [UnitCreateWithoutCourseInput], {
    nullable: true
  })
  create?: UnitCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereUniqueInput], {
    nullable: true
  })
  connect?: UnitWhereUniqueInput[] | undefined;
}
