import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitScalarWhereInput } from "../inputs/UnitScalarWhereInput";
import { UnitUpdateManyMutationInput } from "../inputs/UnitUpdateManyMutationInput";

@TypeGraphQL.InputType("UnitUpdateManyWithWhereWithoutQuestionsInput", {
  isAbstract: true
})
export class UnitUpdateManyWithWhereWithoutQuestionsInput {
  @TypeGraphQL.Field(_type => UnitScalarWhereInput, {
    nullable: false
  })
  where!: UnitScalarWhereInput;

  @TypeGraphQL.Field(_type => UnitUpdateManyMutationInput, {
    nullable: false
  })
  data!: UnitUpdateManyMutationInput;
}
