import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentCreateOrConnectWithoutUnitInput } from "../inputs/ContentCreateOrConnectWithoutUnitInput";
import { ContentCreateWithoutUnitInput } from "../inputs/ContentCreateWithoutUnitInput";
import { ContentWhereUniqueInput } from "../inputs/ContentWhereUniqueInput";

@TypeGraphQL.InputType("ContentCreateNestedManyWithoutUnitInput", {
  isAbstract: true
})
export class ContentCreateNestedManyWithoutUnitInput {
  @TypeGraphQL.Field(_type => [ContentCreateWithoutUnitInput], {
    nullable: true
  })
  create?: ContentCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: ContentCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentWhereUniqueInput], {
    nullable: true
  })
  connect?: ContentWhereUniqueInput[] | undefined;
}
