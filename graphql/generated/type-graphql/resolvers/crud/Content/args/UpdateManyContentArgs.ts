import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContentUpdateManyMutationInput } from "../../../inputs/ContentUpdateManyMutationInput";
import { ContentWhereInput } from "../../../inputs/ContentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyContentArgs {
  @TypeGraphQL.Field(_type => ContentUpdateManyMutationInput, {
    nullable: false
  })
  data!: ContentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ContentWhereInput, {
    nullable: true
  })
  where?: ContentWhereInput | undefined;
}
