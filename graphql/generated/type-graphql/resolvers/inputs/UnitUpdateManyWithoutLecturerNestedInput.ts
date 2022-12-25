import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateManyLecturerInputEnvelope } from "../inputs/UnitCreateManyLecturerInputEnvelope";
import { UnitCreateOrConnectWithoutLecturerInput } from "../inputs/UnitCreateOrConnectWithoutLecturerInput";
import { UnitCreateWithoutLecturerInput } from "../inputs/UnitCreateWithoutLecturerInput";
import { UnitScalarWhereInput } from "../inputs/UnitScalarWhereInput";
import { UnitUpdateManyWithWhereWithoutLecturerInput } from "../inputs/UnitUpdateManyWithWhereWithoutLecturerInput";
import { UnitUpdateWithWhereUniqueWithoutLecturerInput } from "../inputs/UnitUpdateWithWhereUniqueWithoutLecturerInput";
import { UnitUpsertWithWhereUniqueWithoutLecturerInput } from "../inputs/UnitUpsertWithWhereUniqueWithoutLecturerInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateManyWithoutLecturerNestedInput", {
  isAbstract: true
})
export class UnitUpdateManyWithoutLecturerNestedInput {
  @TypeGraphQL.Field(_type => [UnitCreateWithoutLecturerInput], {
    nullable: true
  })
  create?: UnitCreateWithoutLecturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitCreateOrConnectWithoutLecturerInput], {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutLecturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitUpsertWithWhereUniqueWithoutLecturerInput], {
    nullable: true
  })
  upsert?: UnitUpsertWithWhereUniqueWithoutLecturerInput[] | undefined;

  @TypeGraphQL.Field(_type => UnitCreateManyLecturerInputEnvelope, {
    nullable: true
  })
  createMany?: UnitCreateManyLecturerInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [UnitUpdateWithWhereUniqueWithoutLecturerInput], {
    nullable: true
  })
  update?: UnitUpdateWithWhereUniqueWithoutLecturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitUpdateManyWithWhereWithoutLecturerInput], {
    nullable: true
  })
  updateMany?: UnitUpdateManyWithWhereWithoutLecturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UnitScalarWhereInput[] | undefined;
}
