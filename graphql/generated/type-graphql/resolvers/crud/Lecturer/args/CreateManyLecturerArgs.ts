import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LecturerCreateManyInput } from "../../../inputs/LecturerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLecturerArgs {
  @TypeGraphQL.Field(_type => [LecturerCreateManyInput], {
    nullable: false
  })
  data!: LecturerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
