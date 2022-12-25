import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateNestedManyWithoutQuestionsInput } from "../inputs/UnitCreateNestedManyWithoutQuestionsInput";

@TypeGraphQL.InputType("QuestionCreateInput", {
  isAbstract: true
})
export class QuestionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  question!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  answer?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UnitCreateNestedManyWithoutQuestionsInput, {
    nullable: true
  })
  unit?: UnitCreateNestedManyWithoutQuestionsInput | undefined;
}
