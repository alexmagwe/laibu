import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentListRelationFilter } from "../inputs/ContentListRelationFilter";
import { CourseListRelationFilter } from "../inputs/CourseListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LecturerRelationFilter } from "../inputs/LecturerRelationFilter";
import { QuestionListRelationFilter } from "../inputs/QuestionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("UnitWhereInput", {
  isAbstract: true
})
export class UnitWhereInput {
  @TypeGraphQL.Field(_type => [UnitWhereInput], {
    nullable: true
  })
  AND?: UnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereInput], {
    nullable: true
  })
  OR?: UnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereInput], {
    nullable: true
  })
  NOT?: UnitWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CourseListRelationFilter, {
    nullable: true
  })
  course?: CourseListRelationFilter | undefined;

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

  @TypeGraphQL.Field(_type => ContentListRelationFilter, {
    nullable: true
  })
  content?: ContentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LecturerRelationFilter, {
    nullable: true
  })
  lecturer?: LecturerRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lecturerId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => QuestionListRelationFilter, {
    nullable: true
  })
  questions?: QuestionListRelationFilter | undefined;
}
