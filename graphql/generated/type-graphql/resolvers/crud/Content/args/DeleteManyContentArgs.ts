import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContentWhereInput } from "../../../inputs/ContentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyContentArgs {
  @TypeGraphQL.Field(_type => ContentWhereInput, {
    nullable: true
  })
  where?: ContentWhereInput | undefined;
}
