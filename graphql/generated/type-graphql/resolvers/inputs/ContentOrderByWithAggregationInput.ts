import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentAvgOrderByAggregateInput } from "../inputs/ContentAvgOrderByAggregateInput";
import { ContentCountOrderByAggregateInput } from "../inputs/ContentCountOrderByAggregateInput";
import { ContentMaxOrderByAggregateInput } from "../inputs/ContentMaxOrderByAggregateInput";
import { ContentMinOrderByAggregateInput } from "../inputs/ContentMinOrderByAggregateInput";
import { ContentSumOrderByAggregateInput } from "../inputs/ContentSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContentOrderByWithAggregationInput", {
  isAbstract: true
})
export class ContentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  size?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uploadDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  hidden?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  url?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ContentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContentAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ContentAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ContentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ContentMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ContentSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ContentSumOrderByAggregateInput | undefined;
}
