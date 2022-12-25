import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LecturerCreateInput } from "../../../inputs/LecturerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLecturerArgs {
  @TypeGraphQL.Field(_type => LecturerCreateInput, {
    nullable: false
  })
  data!: LecturerCreateInput;
}
