import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LecturerCreateWithoutUnitInput } from "../inputs/LecturerCreateWithoutUnitInput";
import { LecturerUpdateWithoutUnitInput } from "../inputs/LecturerUpdateWithoutUnitInput";

@TypeGraphQL.InputType("LecturerUpsertWithoutUnitInput", {
  isAbstract: true
})
export class LecturerUpsertWithoutUnitInput {
  @TypeGraphQL.Field(_type => LecturerUpdateWithoutUnitInput, {
    nullable: false
  })
  update!: LecturerUpdateWithoutUnitInput;

  @TypeGraphQL.Field(_type => LecturerCreateWithoutUnitInput, {
    nullable: false
  })
  create!: LecturerCreateWithoutUnitInput;
}
