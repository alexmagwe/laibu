import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentCreateWithoutUnitInput } from "../inputs/ContentCreateWithoutUnitInput";
import { ContentWhereUniqueInput } from "../inputs/ContentWhereUniqueInput";

@TypeGraphQL.InputType("ContentCreateOrConnectWithoutUnitInput", {
  isAbstract: true
})
export class ContentCreateOrConnectWithoutUnitInput {
  @TypeGraphQL.Field(_type => ContentWhereUniqueInput, {
    nullable: false
  })
  where!: ContentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContentCreateWithoutUnitInput, {
    nullable: false
  })
  create!: ContentCreateWithoutUnitInput;
}
