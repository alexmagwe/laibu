import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumContentVariantFilter } from "../inputs/NestedEnumContentVariantFilter";
import { NestedEnumContentVariantWithAggregatesFilter } from "../inputs/NestedEnumContentVariantWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ContentVariant } from "../../enums/ContentVariant";

@TypeGraphQL.InputType("EnumContentVariantWithAggregatesFilter", {
  isAbstract: true
})
export class EnumContentVariantWithAggregatesFilter {
  @TypeGraphQL.Field(_type => ContentVariant, {
    nullable: true
  })
  equals?: "Video" | "Assignment" | "Content" | undefined;

  @TypeGraphQL.Field(_type => [ContentVariant], {
    nullable: true
  })
  in?: Array<"Video" | "Assignment" | "Content"> | undefined;

  @TypeGraphQL.Field(_type => [ContentVariant], {
    nullable: true
  })
  notIn?: Array<"Video" | "Assignment" | "Content"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumContentVariantWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumContentVariantWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumContentVariantFilter, {
    nullable: true
  })
  _min?: NestedEnumContentVariantFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumContentVariantFilter, {
    nullable: true
  })
  _max?: NestedEnumContentVariantFilter | undefined;
}
