import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentOrderByRelationAggregateInput } from "../inputs/ContentOrderByRelationAggregateInput";
import { CourseOrderByRelationAggregateInput } from "../inputs/CourseOrderByRelationAggregateInput";
import { LecturerOrderByWithRelationInput } from "../inputs/LecturerOrderByWithRelationInput";
import { QuestionOrderByRelationAggregateInput } from "../inputs/QuestionOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UnitOrderByWithRelationInput", {
  isAbstract: true
})
export class UnitOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CourseOrderByRelationAggregateInput, {
    nullable: true
  })
  course?: CourseOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  year?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  semester?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ContentOrderByRelationAggregateInput, {
    nullable: true
  })
  content?: ContentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LecturerOrderByWithRelationInput, {
    nullable: true
  })
  lecturer?: LecturerOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lecturerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => QuestionOrderByRelationAggregateInput, {
    nullable: true
  })
  questions?: QuestionOrderByRelationAggregateInput | undefined;
}
