import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CourseCountOrderByAggregateInput } from "../inputs/CourseCountOrderByAggregateInput";
import { CourseMaxOrderByAggregateInput } from "../inputs/CourseMaxOrderByAggregateInput";
import { CourseMinOrderByAggregateInput } from "../inputs/CourseMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CourseOrderByWithAggregationInput", {
  isAbstract: true
})
export class CourseOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CourseCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CourseMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CourseMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CourseMinOrderByAggregateInput | undefined;
}
