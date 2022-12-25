import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateManyLecturerInput } from "../inputs/UnitCreateManyLecturerInput";

@TypeGraphQL.InputType("UnitCreateManyLecturerInputEnvelope", {
  isAbstract: true
})
export class UnitCreateManyLecturerInputEnvelope {
  @TypeGraphQL.Field(_type => [UnitCreateManyLecturerInput], {
    nullable: false
  })
  data!: UnitCreateManyLecturerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
