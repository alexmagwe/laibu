import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitAvgAggregate } from "../outputs/UnitAvgAggregate";
import { UnitCountAggregate } from "../outputs/UnitCountAggregate";
import { UnitMaxAggregate } from "../outputs/UnitMaxAggregate";
import { UnitMinAggregate } from "../outputs/UnitMinAggregate";
import { UnitSumAggregate } from "../outputs/UnitSumAggregate";

@TypeGraphQL.ObjectType("UnitGroupBy", {
  isAbstract: true
})
export class UnitGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  year!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  semester!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lecturerId!: string;

  @TypeGraphQL.Field(_type => UnitCountAggregate, {
    nullable: true
  })
  _count!: UnitCountAggregate | null;

  @TypeGraphQL.Field(_type => UnitAvgAggregate, {
    nullable: true
  })
  _avg!: UnitAvgAggregate | null;

  @TypeGraphQL.Field(_type => UnitSumAggregate, {
    nullable: true
  })
  _sum!: UnitSumAggregate | null;

  @TypeGraphQL.Field(_type => UnitMinAggregate, {
    nullable: true
  })
  _min!: UnitMinAggregate | null;

  @TypeGraphQL.Field(_type => UnitMaxAggregate, {
    nullable: true
  })
  _max!: UnitMaxAggregate | null;
}
