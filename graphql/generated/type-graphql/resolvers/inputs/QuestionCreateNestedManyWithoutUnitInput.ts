import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateOrConnectWithoutUnitInput } from "../inputs/QuestionCreateOrConnectWithoutUnitInput";
import { QuestionCreateWithoutUnitInput } from "../inputs/QuestionCreateWithoutUnitInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionCreateNestedManyWithoutUnitInput", {
  isAbstract: true
})
export class QuestionCreateNestedManyWithoutUnitInput {
  @TypeGraphQL.Field(_type => [QuestionCreateWithoutUnitInput], {
    nullable: true
  })
  create?: QuestionCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  connect?: QuestionWhereUniqueInput[] | undefined;
}
