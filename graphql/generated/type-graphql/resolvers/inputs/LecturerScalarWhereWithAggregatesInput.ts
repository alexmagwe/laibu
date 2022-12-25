import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("LecturerScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class LecturerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [LecturerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LecturerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LecturerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LecturerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [LecturerScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LecturerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  firstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  lastName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  contactInfo?: StringNullableWithAggregatesFilter | undefined;
}
