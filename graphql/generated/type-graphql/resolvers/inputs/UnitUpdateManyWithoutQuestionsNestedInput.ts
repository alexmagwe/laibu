import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutQuestionsInput } from "../inputs/UnitCreateOrConnectWithoutQuestionsInput";
import { UnitCreateWithoutQuestionsInput } from "../inputs/UnitCreateWithoutQuestionsInput";
import { UnitScalarWhereInput } from "../inputs/UnitScalarWhereInput";
import { UnitUpdateManyWithWhereWithoutQuestionsInput } from "../inputs/UnitUpdateManyWithWhereWithoutQuestionsInput";
import { UnitUpdateWithWhereUniqueWithoutQuestionsInput } from "../inputs/UnitUpdateWithWhereUniqueWithoutQuestionsInput";
import { UnitUpsertWithWhereUniqueWithoutQuestionsInput } from "../inputs/UnitUpsertWithWhereUniqueWithoutQuestionsInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitUpdateManyWithoutQuestionsNestedInput", {
  isAbstract: true
})
export class UnitUpdateManyWithoutQuestionsNestedInput {
  @TypeGraphQL.Field(_type => [UnitCreateWithoutQuestionsInput], {
    nullable: true
  })
  create?: UnitCreateWithoutQuestionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitCreateOrConnectWithoutQuestionsInput], {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutQuestionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitUpsertWithWhereUniqueWithoutQuestionsInput], {
    nullable: true
  })
  upsert?: UnitUpsertWithWhereUniqueWithoutQuestionsInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [UnitUpdateWithWhereUniqueWithoutQuestionsInput], {
    nullable: true
  })
  update?: UnitUpdateWithWhereUniqueWithoutQuestionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitUpdateManyWithWhereWithoutQuestionsInput], {
    nullable: true
  })
  updateMany?: UnitUpdateManyWithWhereWithoutQuestionsInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarWhereInput], {
    nullable: true
  })
  deleteMany?: UnitScalarWhereInput[] | undefined;
}
