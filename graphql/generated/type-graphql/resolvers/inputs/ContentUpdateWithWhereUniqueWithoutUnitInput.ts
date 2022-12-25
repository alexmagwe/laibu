import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentUpdateWithoutUnitInput } from "../inputs/ContentUpdateWithoutUnitInput";
import { ContentWhereUniqueInput } from "../inputs/ContentWhereUniqueInput";

@TypeGraphQL.InputType("ContentUpdateWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class ContentUpdateWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => ContentWhereUniqueInput, {
    nullable: false
  })
  where!: ContentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContentUpdateWithoutUnitInput, {
    nullable: false
  })
  data!: ContentUpdateWithoutUnitInput;
}
