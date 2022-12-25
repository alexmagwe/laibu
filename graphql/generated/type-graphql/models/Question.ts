import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Unit } from "../models/Unit";
import { QuestionCount } from "../resolvers/outputs/QuestionCount";

@TypeGraphQL.ObjectType("Question", {
  isAbstract: true
})
export class Question {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  question!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  answer?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  unit?: Unit[];

  @TypeGraphQL.Field(_type => QuestionCount, {
    nullable: true
  })
  _count?: QuestionCount | null;
}
