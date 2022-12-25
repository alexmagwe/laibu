import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentScalarWhereInput } from "../inputs/ContentScalarWhereInput";
import { ContentUpdateManyMutationInput } from "../inputs/ContentUpdateManyMutationInput";

@TypeGraphQL.InputType("ContentUpdateManyWithWhereWithoutUnitInput", {
  isAbstract: true
})
export class ContentUpdateManyWithWhereWithoutUnitInput {
  @TypeGraphQL.Field(_type => ContentScalarWhereInput, {
    nullable: false
  })
  where!: ContentScalarWhereInput;

  @TypeGraphQL.Field(_type => ContentUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContentUpdateManyMutationInput;
}
