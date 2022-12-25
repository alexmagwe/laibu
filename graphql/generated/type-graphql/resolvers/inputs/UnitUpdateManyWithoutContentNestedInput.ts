import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutContentInput } from "../inputs/UnitCreateOrConnectWithoutContentInput";
import { UnitCreateWithoutContentInput } from "../inputs/UnitCreateWithoutContentInput";
import { UnitScalarWhereInput } from "../inputs/UnitScalarWhereInput";
import { UnitUpdateManyWithWhereWithoutContentInput } from "../inputs/UnitUpdateManyWithWhereWithoutContentInput";
import { UnitUpdateWithWhereUniqueWithoutContentInput } from "../inputs/UnitUpdateWithWhereUniqueWithoutContentInput";
import { UnitUpsertWithWhereUniqueWithoutContentInput } from "../inputs/UnitUpsertWithWhereUniqueWithoutContentInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateManyWithoutContentNestedInput", {
  isAbstract: true
})
export class UnitUpdateManyWithoutContentNestedInput {
  @TypeGraphQL.Field(_type => [UnitCreateWithoutContentInput], {
    nullable: true
  })
  create?: UnitCreateWithoutContentInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitCreateOrConnectWithoutContentInput], {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutContentInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitUpsertWithWhereUniqueWithoutContentInput], {
    nullable: true
  })
  upsert?: UnitUpsertWithWhereUniqueWithoutContentInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UnitUpdateWithWhereUniqueWithoutContentInput], {
    nullable: true
  })
  update?: UnitUpdateWithWhereUniqueWithoutContentInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitUpdateManyWithWhereWithoutContentInput], {
    nullable: true
  })
  updateMany?: UnitUpdateManyWithWhereWithoutContentInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UnitScalarWhereInput[] | undefined;
}
