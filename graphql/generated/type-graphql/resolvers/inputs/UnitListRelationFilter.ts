import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitWhereInput } from "../inputs/UnitWhereInput";

@TypeGraphQL.InputType("UnitListRelationFilter", {
  isAbstract: true
})
export class UnitListRelationFilter {
  @TypeGraphQL.Field(_type => UnitWhereInput, {
    nullable: true
  })
  every?: UnitWhereInput | undefined;

  @TypeGraphQL.Field(_type => UnitWhereInput, {
    nullable: true
  })
  some?: UnitWhereInput | undefined;

  @TypeGraphQL.Field(_type => UnitWhereInput, {
    nullable: true
  })
  none?: UnitWhereInput | undefined;
}
