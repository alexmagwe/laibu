import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentVariant } from "../../enums/ContentVariant";

@TypeGraphQL.InputType("NestedEnumContentVariantFilter", {
  isAbstract: true
})
export class NestedEnumContentVariantFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumContentVariantFilter, {
    nullable: true
  })
  not?: NestedEnumContentVariantFilter | undefined;
}
