import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentCreateOrConnectWithoutUnitInput } from "../inputs/ContentCreateOrConnectWithoutUnitInput";
import { ContentCreateWithoutUnitInput } from "../inputs/ContentCreateWithoutUnitInput";
import { ContentScalarWhereInput } from "../inputs/ContentScalarWhereInput";
import { ContentUpdateManyWithWhereWithoutUnitInput } from "../inputs/ContentUpdateManyWithWhereWithoutUnitInput";
import { ContentUpdateWithWhereUniqueWithoutUnitInput } from "../inputs/ContentUpdateWithWhereUniqueWithoutUnitInput";
import { ContentUpsertWithWhereUniqueWithoutUnitInput } from "../inputs/ContentUpsertWithWhereUniqueWithoutUnitInput";
import { ContentWhereUniqueInput } from "../inputs/ContentWhereUniqueInput";

@TypeGraphQL.InputType("ContentUpdateManyWithoutUnitNestedInput", {
  isAbstract: true
})
export class ContentUpdateManyWithoutUnitNestedInput {
  @TypeGraphQL.Field(_type => [ContentCreateWithoutUnitInput], {
    nullable: true
  })
  create?: ContentCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: ContentCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentUpsertWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  upsert?: ContentUpsertWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentWhereUniqueInput], {
    nullable: true
  })
  set?: ContentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ContentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentWhereUniqueInput], {
    nullable: true
  })
  delete?: ContentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentWhereUniqueInput], {
    nullable: true
  })
  connect?: ContentWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentUpdateWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  update?: ContentUpdateWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentUpdateManyWithWhereWithoutUnitInput], {
    nullable: true
  })
  updateMany?: ContentUpdateManyWithWhereWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ContentScalarWhereInput[] | undefined;
}
