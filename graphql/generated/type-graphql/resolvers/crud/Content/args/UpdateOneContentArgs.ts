import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContentUpdateInput } from "../../../inputs/ContentUpdateInput";
import { ContentWhereUniqueInput } from "../../../inputs/ContentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneContentArgs {
  @TypeGraphQL.Field(_type => ContentUpdateInput, {
    nullable: false
  })
  data!: ContentUpdateInput;

  @TypeGraphQL.Field(_type => ContentWhereUniqueInput, {
    nullable: false
  })
  where!: ContentWhereUniqueInput;
}
