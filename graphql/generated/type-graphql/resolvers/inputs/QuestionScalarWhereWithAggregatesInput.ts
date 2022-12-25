import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("QuestionScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class QuestionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [QuestionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: QuestionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: QuestionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: QuestionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  question?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  answer?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
