import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentVariant } from "../../enums/ContentVariant";

@TypeGraphQL.ObjectType("ContentMaxAggregate", {
  isAbstract: true
})
export class ContentMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  size!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  uploadDate!: Date | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hidden!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url!: string | null;

  @TypeGraphQL.Field(_type => ContentVariant, {
    nullable: true
  })
  type!: "Video" | "Assignment" | "Content" | null;
}
