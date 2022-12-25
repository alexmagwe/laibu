import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UnitScalarWhereInput", {
  isAbstract: true
})
export class UnitScalarWhereInput {
  @TypeGraphQL.Field(_type => [UnitScalarWhereInput], {
    nullable: true
  })
  AND?: UnitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarWhereInput], {
    nullable: true
  })
  OR?: UnitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarWhereInput], {
    nullable: true
  })
  NOT?: UnitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  code?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  year?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  semester?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lecturerId?: StringFilter | undefined;
}
