import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentAvgAggregate } from "../outputs/ContentAvgAggregate";
import { ContentCountAggregate } from "../outputs/ContentCountAggregate";
import { ContentMaxAggregate } from "../outputs/ContentMaxAggregate";
import { ContentMinAggregate } from "../outputs/ContentMinAggregate";
import { ContentSumAggregate } from "../outputs/ContentSumAggregate";
import { ContentVariant } from "../../enums/ContentVariant";

@TypeGraphQL.ObjectType("ContentGroupBy", {
  isAbstract: true
})
export class ContentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  size!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  uploadDate!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  hidden!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => ContentVariant, {
    nullable: false
  })
  type!: "Video" | "Assignment" | "Content";

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
