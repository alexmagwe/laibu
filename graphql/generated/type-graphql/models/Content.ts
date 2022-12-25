import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Unit } from "../models/Unit";
import { ContentVariant } from "../enums/ContentVariant";
import { ContentCount } from "../resolvers/outputs/ContentCount";

@TypeGraphQL.ObjectType("Content", {
  isAbstract: true
})
export class Content {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  size?: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  uploadDate!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  hidden!: boolean;

  unit?: Unit[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => ContentVariant, {
    nullable: false
  })
  type!: "Video" | "Assignment" | "Content";

  @TypeGraphQL.Field(_type => ContentCount, {
    nullable: true
  })
  _count?: ContentCount | null;
}
