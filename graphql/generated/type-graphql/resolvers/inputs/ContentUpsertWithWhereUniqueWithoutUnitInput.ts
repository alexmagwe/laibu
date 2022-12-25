import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentCreateWithoutUnitInput } from "../inputs/ContentCreateWithoutUnitInput";
import { ContentUpdateWithoutUnitInput } from "../inputs/ContentUpdateWithoutUnitInput";
import { ContentWhereUniqueInput } from "../inputs/ContentWhereUniqueInput";

@TypeGraphQL.InputType("ContentUpsertWithWhereUniqueWithoutUnitInput", {
  isAbstract: true
})
export class ContentUpsertWithWhereUniqueWithoutUnitInput {
  @TypeGraphQL.Field(_type => ContentWhereUniqueInput, {
    nullable: false
  })
  where!: ContentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContentUpdateWithoutUnitInput, {
    nullable: false
  })
  update!: ContentUpdateWithoutUnitInput;

  @TypeGraphQL.Field(_type => ContentCreateWithoutUnitInput, {
    nullable: false
  })
  create!: ContentCreateWithoutUnitInput;
}
