import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CourseScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CourseScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CourseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CourseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CourseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CourseScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;
}
