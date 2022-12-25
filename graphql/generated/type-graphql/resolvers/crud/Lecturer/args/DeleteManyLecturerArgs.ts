import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LecturerWhereInput } from "../../../inputs/LecturerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyLecturerArgs {
  @TypeGraphQL.Field(_type => LecturerWhereInput, {
    nullable: true
  })
  where?: LecturerWhereInput | undefined;
}
