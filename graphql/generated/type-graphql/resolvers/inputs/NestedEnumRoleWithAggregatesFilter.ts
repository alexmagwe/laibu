import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("NestedEnumRoleWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumRoleWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  equals?: "Moderator" | "Student" | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  in?: Array<"Moderator" | "Student"> | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true
  })
  notIn?: Array<"Moderator" | "Student"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleFilter, {
    nullable: true
  })
  _min?: NestedEnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleFilter, {
    nullable: true
  })
  _max?: NestedEnumRoleFilter | undefined;
}