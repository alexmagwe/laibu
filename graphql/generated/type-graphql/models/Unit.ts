import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Content } from "../models/Content";
import { Course } from "../models/Course";
import { Lecturer } from "../models/Lecturer";
import { Question } from "../models/Question";
import { UnitCount } from "../resolvers/outputs/UnitCount";

@TypeGraphQL.ObjectType("Unit", {
  isAbstract: true
})
export class Unit {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  course?: Course[];

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

  content?: Content[];

  lecturer?: Lecturer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lecturerId!: string;

  questions?: Question[];

  @TypeGraphQL.Field(_type => UnitCount, {
    nullable: true
  })
  _count?: UnitCount | null;
}
