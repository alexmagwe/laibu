import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LecturerOrderByWithRelationInput } from "../../../inputs/LecturerOrderByWithRelationInput";
import { LecturerWhereInput } from "../../../inputs/LecturerWhereInput";
import { LecturerWhereUniqueInput } from "../../../inputs/LecturerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateLecturerArgs {
  @TypeGraphQL.Field(_type => LecturerWhereInput, {
    nullable: true
  })
  where?: LecturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LecturerOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LecturerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => LecturerWhereUniqueInput, {
    nullable: true
  })
  cursor?: LecturerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
