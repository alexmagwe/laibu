import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Unit } from "../models/Unit";
import { LecturerCount } from "../resolvers/outputs/LecturerCount";

@TypeGraphQL.ObjectType("Lecturer", {
  isAbstract: true
})
export class Lecturer {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  unit?: Unit[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contactInfo?: string | null;

  @TypeGraphQL.Field(_type => LecturerCount, {
    nullable: true
  })
  _count?: LecturerCount | null;
}
