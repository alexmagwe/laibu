import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LecturerWhereUniqueInput } from "../../../inputs/LecturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueLecturerOrThrowArgs {
  @TypeGraphQL.Field(_type => LecturerWhereUniqueInput, {
    nullable: false
  })
  where!: LecturerWhereUniqueInput;
}
