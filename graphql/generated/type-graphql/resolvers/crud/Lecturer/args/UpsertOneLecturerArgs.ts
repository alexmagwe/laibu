import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LecturerCreateInput } from "../../../inputs/LecturerCreateInput";
import { LecturerUpdateInput } from "../../../inputs/LecturerUpdateInput";
import { LecturerWhereUniqueInput } from "../../../inputs/LecturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLecturerArgs {
  @TypeGraphQL.Field(_type => LecturerWhereUniqueInput, {
    nullable: false
  })
  where!: LecturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => LecturerCreateInput, {
    nullable: false
  })
  create!: LecturerCreateInput;

  @TypeGraphQL.Field(_type => LecturerUpdateInput, {
    nullable: false
  })
  update!: LecturerUpdateInput;
}
