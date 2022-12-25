import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UnitListRelationFilter } from "../inputs/UnitListRelationFilter";

@TypeGraphQL.InputType("LecturerWhereInput", {
  isAbstract: true
})
export class LecturerWhereInput {
  @TypeGraphQL.Field(_type => [LecturerWhereInput], {
    nullable: true
  })
  AND?: LecturerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LecturerWhereInput], {
    nullable: true
  })
  OR?: LecturerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [LecturerWhereInput], {
    nullable: true
  })
  NOT?: LecturerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UnitListRelationFilter, {
    nullable: true
  })
  unit?: UnitListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  contactInfo?: StringNullableFilter | undefined;
}
