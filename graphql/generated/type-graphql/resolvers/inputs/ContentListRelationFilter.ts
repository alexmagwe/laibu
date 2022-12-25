import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentWhereInput } from "../inputs/ContentWhereInput";

@TypeGraphQL.InputType("ContentListRelationFilter", {
  isAbstract: true
})
export class ContentListRelationFilter {
  @TypeGraphQL.Field(_type => ContentWhereInput, {
    nullable: true
  })
  every?: ContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContentWhereInput, {
    nullable: true
  })
  some?: ContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContentWhereInput, {
    nullable: true
  })
  none?: ContentWhereInput | undefined;
}
