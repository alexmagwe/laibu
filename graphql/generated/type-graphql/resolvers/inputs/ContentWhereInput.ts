import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumContentVariantFilter } from "../inputs/EnumContentVariantFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UnitListRelationFilter } from "../inputs/UnitListRelationFilter";

@TypeGraphQL.InputType("ContentWhereInput", {
  isAbstract: true
})
export class ContentWhereInput {
  @TypeGraphQL.Field(_type => [ContentWhereInput], {
    nullable: true
  })
  AND?: ContentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentWhereInput], {
    nullable: true
  })
  OR?: ContentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentWhereInput], {
    nullable: true
  })
  NOT?: ContentWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => UnitListRelationFilter, {
    nullable: true
  })
  unit?: UnitListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  url?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumContentVariantFilter, {
    nullable: true
  })
  type?: EnumContentVariantFilter | undefined;
}
