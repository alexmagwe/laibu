import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Unit } from "../models/Unit";
import { User } from "../models/User";
import { CourseCount } from "../resolvers/outputs/CourseCount";

@TypeGraphQL.ObjectType("Course", {
  isAbstract: true
})
export class Course {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  users?: User[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  units?: Unit[];

  @TypeGraphQL.Field(_type => CourseCount, {
    nullable: true
  })
  _count?: CourseCount | null;
}
