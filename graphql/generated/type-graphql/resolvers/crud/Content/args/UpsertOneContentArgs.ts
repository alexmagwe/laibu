import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContentCreateInput } from "../../../inputs/ContentCreateInput";
import { ContentUpdateInput } from "../../../inputs/ContentUpdateInput";
import { ContentWhereUniqueInput } from "../../../inputs/ContentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneContentArgs {
  @TypeGraphQL.Field(_type => ContentWhereUniqueInput, {
    nullable: false
  })
  where!: ContentWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContentCreateInput, {
    nullable: false
  })
  create!: ContentCreateInput;

  @TypeGraphQL.Field(_type => ContentUpdateInput, {
    nullable: false
  })
  update!: ContentUpdateInput;
}
