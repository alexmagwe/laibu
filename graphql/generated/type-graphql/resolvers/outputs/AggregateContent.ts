import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentAvgAggregate } from "../outputs/ContentAvgAggregate";
import { ContentCountAggregate } from "../outputs/ContentCountAggregate";
import { ContentMaxAggregate } from "../outputs/ContentMaxAggregate";
import { ContentMinAggregate } from "../outputs/ContentMinAggregate";
import { ContentSumAggregate } from "../outputs/ContentSumAggregate";

@TypeGraphQL.ObjectType("AggregateContent", {
  isAbstract: true
})
export class AggregateContent {
  @TypeGraphQL.Field(_type => ContentCountAggregate, {
    nullable: true
  })
  _count!: ContentCountAggregate | null;

  @TypeGraphQL.Field(_type => ContentAvgAggregate, {
    nullable: true
  })
  _avg!: ContentAvgAggregate | null;

  @TypeGraphQL.Field(_type => ContentSumAggregate, {
    nullable: true
  })
  _sum!: ContentSumAggregate | null;

  @TypeGraphQL.Field(_type => ContentMinAggregate, {
    nullable: true
  })
  _min!: ContentMinAggregate | null;

  @TypeGraphQL.Field(_type => ContentMaxAggregate, {
    nullable: true
  })
  _max!: ContentMaxAggregate | null;
}
