import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UnitListRelationFilter } from "../inputs/UnitListRelationFilter";

@TypeGraphQL.InputType("QuestionWhereInput", {
  isAbstract: true
})
export class QuestionWhereInput {
  @TypeGraphQL.Field(_type => [QuestionWhereInput], {
    nullable: true
  })
  AND?: QuestionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereInput], {
    nullable: true
  })
  OR?: QuestionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereInput], {
    nullable: true
  })
  NOT?: QuestionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  question?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  answer?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UnitListRelationFilter, {
    nullable: true
  })
  unit?: UnitListRelationFilter | undefined;
}
