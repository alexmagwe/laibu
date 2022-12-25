import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LecturerCountOrderByAggregateInput } from "../inputs/LecturerCountOrderByAggregateInput";
import { LecturerMaxOrderByAggregateInput } from "../inputs/LecturerMaxOrderByAggregateInput";
import { LecturerMinOrderByAggregateInput } from "../inputs/LecturerMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LecturerOrderByWithAggregationInput", {
  isAbstract: true
})
export class LecturerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contactInfo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => LecturerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LecturerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LecturerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LecturerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LecturerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LecturerMinOrderByAggregateInput | undefined;
}
