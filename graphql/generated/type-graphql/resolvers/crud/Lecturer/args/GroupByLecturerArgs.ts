import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LecturerOrderByWithAggregationInput } from "../../../inputs/LecturerOrderByWithAggregationInput";
import { LecturerScalarWhereWithAggregatesInput } from "../../../inputs/LecturerScalarWhereWithAggregatesInput";
import { LecturerWhereInput } from "../../../inputs/LecturerWhereInput";
import { LecturerScalarFieldEnum } from "../../../../enums/LecturerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLecturerArgs {
  @TypeGraphQL.Field(_type => LecturerWhereInput, {
    nullable: true
  })
  where?: LecturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LecturerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LecturerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LecturerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "firstName" | "lastName" | "email" | "contactInfo">;

  @TypeGraphQL.Field(_type => LecturerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LecturerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
