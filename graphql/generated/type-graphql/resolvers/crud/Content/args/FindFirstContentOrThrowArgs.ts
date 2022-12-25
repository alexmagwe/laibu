import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContentOrderByWithRelationInput } from "../../../inputs/ContentOrderByWithRelationInput";
import { ContentWhereInput } from "../../../inputs/ContentWhereInput";
import { ContentWhereUniqueInput } from "../../../inputs/ContentWhereUniqueInput";
import { ContentScalarFieldEnum } from "../../../../enums/ContentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstContentOrThrowArgs {
  @TypeGraphQL.Field(_type => ContentWhereInput, {
    nullable: true
  })
  where?: ContentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ContentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ContentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ContentWhereUniqueInput, {
    nullable: true
  })
  cursor?: ContentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ContentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "size" | "uploadDate" | "hidden" | "url" | "type"> | undefined;
}
