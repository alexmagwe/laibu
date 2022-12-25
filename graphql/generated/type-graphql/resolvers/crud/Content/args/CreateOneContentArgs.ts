import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContentCreateInput } from "../../../inputs/ContentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneContentArgs {
  @TypeGraphQL.Field(_type => ContentCreateInput, {
    nullable: false
  })
  data!: ContentCreateInput;
}
