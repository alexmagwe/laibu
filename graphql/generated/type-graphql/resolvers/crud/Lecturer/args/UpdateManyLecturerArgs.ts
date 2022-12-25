import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LecturerUpdateManyMutationInput } from "../../../inputs/LecturerUpdateManyMutationInput";
import { LecturerWhereInput } from "../../../inputs/LecturerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLecturerArgs {
  @TypeGraphQL.Field(_type => LecturerUpdateManyMutationInput, {
    nullable: false
  })
  data!: LecturerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LecturerWhereInput, {
    nullable: true
  })
  where?: LecturerWhereInput | undefined;
}
