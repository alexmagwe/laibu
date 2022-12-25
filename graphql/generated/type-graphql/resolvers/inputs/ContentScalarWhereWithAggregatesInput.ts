import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumContentVariantWithAggregatesFilter } from "../inputs/EnumContentVariantWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ContentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ContentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ContentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ContentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ContentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ContentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  size?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  uploadDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolWithAggregatesFilter, {
    nullable: true
  })
  hidden?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  url?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumContentVariantWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumContentVariantWithAggregatesFilter | undefined;
}
