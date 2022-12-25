import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LecturerCountAggregate } from "../outputs/LecturerCountAggregate";
import { LecturerMaxAggregate } from "../outputs/LecturerMaxAggregate";
import { LecturerMinAggregate } from "../outputs/LecturerMinAggregate";

@TypeGraphQL.ObjectType("AggregateLecturer", {
  isAbstract: true
})
export class AggregateLecturer {
  @TypeGraphQL.Field(_type => LecturerCountAggregate, {
    nullable: true
  })
  _count!: LecturerCountAggregate | null;

  @TypeGraphQL.Field(_type => LecturerMinAggregate, {
    nullable: true
  })
  _min!: LecturerMinAggregate | null;

  @TypeGraphQL.Field(_type => LecturerMaxAggregate, {
    nullable: true
  })
  _max!: LecturerMaxAggregate | null;
}
