import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContentWhereUniqueInput } from "../../../inputs/ContentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueContentOrThrowArgs {
  @TypeGraphQL.Field(_type => ContentWhereUniqueInput, {
    nullable: false
  })
  where!: ContentWhereUniqueInput;
}
