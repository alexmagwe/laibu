import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CourseScalarWhereInput", {
  isAbstract: true
})
export class CourseScalarWhereInput {
  @TypeGraphQL.Field(_type => [CourseScalarWhereInput], {
    nullable: true
  })
  AND?: CourseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereInput], {
    nullable: true
  })
  OR?: CourseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CourseScalarWhereInput], {
    nullable: true
  })
  NOT?: CourseScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
