import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("QuestionScalarWhereInput", {
  isAbstract: true
})
export class QuestionScalarWhereInput {
  @TypeGraphQL.Field(_type => [QuestionScalarWhereInput], {
    nullable: true
  })
  AND?: QuestionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereInput], {
    nullable: true
  })
  OR?: QuestionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereInput], {
    nullable: true
  })
  NOT?: QuestionScalarWhereInput[] | undefined;

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
}
