import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LecturerUpdateInput } from "../../../inputs/LecturerUpdateInput";
import { LecturerWhereUniqueInput } from "../../../inputs/LecturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLecturerArgs {
  @TypeGraphQL.Field(_type => LecturerUpdateInput, {
    nullable: false
  })
  data!: LecturerUpdateInput;

  @TypeGraphQL.Field(_type => LecturerWhereUniqueInput, {
    nullable: false
  })
  where!: LecturerWhereUniqueInput;
}
