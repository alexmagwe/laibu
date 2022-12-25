import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ContentCreateManyInput } from "../../../inputs/ContentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyContentArgs {
  @TypeGraphQL.Field(_type => [ContentCreateManyInput], {
    nullable: false
  })
  data!: ContentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
