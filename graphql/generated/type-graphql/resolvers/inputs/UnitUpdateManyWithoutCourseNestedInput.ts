import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutCourseInput } from "../inputs/UnitCreateOrConnectWithoutCourseInput";
import { UnitCreateWithoutCourseInput } from "../inputs/UnitCreateWithoutCourseInput";
import { UnitScalarWhereInput } from "../inputs/UnitScalarWhereInput";
import { UnitUpdateManyWithWhereWithoutCourseInput } from "../inputs/UnitUpdateManyWithWhereWithoutCourseInput";
import { UnitUpdateWithWhereUniqueWithoutCourseInput } from "../inputs/UnitUpdateWithWhereUniqueWithoutCourseInput";
import { UnitUpsertWithWhereUniqueWithoutCourseInput } from "../inputs/UnitUpsertWithWhereUniqueWithoutCourseInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateManyWithoutCourseNestedInput", {
  isAbstract: true
})
export class UnitUpdateManyWithoutCourseNestedInput {
  @TypeGraphQL.Field(_type => [UnitCreateWithoutCourseInput], {
    nullable: true
  })
  create?: UnitCreateWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitCreateOrConnectWithoutCourseInput], {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitUpsertWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  upsert?: UnitUpsertWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereUniqueInput], {
    nullable: true
  })
  set?: UnitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereUniqueInput], {
    nullable: true
  })
  disconnect?: UnitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereUniqueInput], {
    nullable: true
  })
  delete?: UnitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereUniqueInput], {
    nullable: true
  })
  connect?: UnitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitUpdateWithWhereUniqueWithoutCourseInput], {
    nullable: true
  })
  update?: UnitUpdateWithWhereUniqueWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitUpdateManyWithWhereWithoutCourseInput], {
    nullable: true
  })
  updateMany?: UnitUpdateManyWithWhereWithoutCourseInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UnitScalarWhereInput[] | undefined;
}
