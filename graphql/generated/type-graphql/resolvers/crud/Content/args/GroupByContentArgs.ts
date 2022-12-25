import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContentOrderByWithAggregationInput } from "../../../inputs/ContentOrderByWithAggregationInput";
import { ContentScalarWhereWithAggregatesInput } from "../../../inputs/ContentScalarWhereWithAggregatesInput";
import { ContentWhereInput } from "../../../inputs/ContentWhereInput";
import { ContentScalarFieldEnum } from "../../../../enums/ContentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByContentArgs {
  @TypeGraphQL.Field(_type => ContentWhereInput, {
    nullable: true
  })
  where?: ContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ContentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ContentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "size" | "uploadDate" | "hidden" | "url" | "type">;

  @TypeGraphQL.Field(_type => ContentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ContentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
