import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UnitScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UnitScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UnitScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UnitScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UnitScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UnitScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  code?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  year?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  semester?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lecturerId?: StringWithAggregatesFilter | undefined;
}
