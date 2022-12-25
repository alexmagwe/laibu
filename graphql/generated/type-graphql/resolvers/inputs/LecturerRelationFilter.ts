import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LecturerWhereInput } from "../inputs/LecturerWhereInput";

@TypeGraphQL.InputType("LecturerRelationFilter", {
  isAbstract: true
})
export class LecturerRelationFilter {
  @TypeGraphQL.Field(_type => LecturerWhereInput, {
    nullable: true
  })
  is?: LecturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => LecturerWhereInput, {
    nullable: true
  })
  isNot?: LecturerWhereInput | undefined;
}
