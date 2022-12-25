import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumContentVariantFilter } from "../inputs/EnumContentVariantFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ContentScalarWhereInput", {
  isAbstract: true
})
export class ContentScalarWhereInput {
  @TypeGraphQL.Field(_type => [ContentScalarWhereInput], {
    nullable: true
  })
  AND?: ContentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentScalarWhereInput], {
    nullable: true
  })
  OR?: ContentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentScalarWhereInput], {
    nullable: true
  })
  NOT?: ContentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  size?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  uploadDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  hidden?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumContentVariantFilter, {
    nullable: true
  })
  type?: EnumContentVariantFilter | undefined;
}
