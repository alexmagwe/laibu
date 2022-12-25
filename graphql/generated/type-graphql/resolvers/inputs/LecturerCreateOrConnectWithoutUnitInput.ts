import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LecturerCreateWithoutUnitInput } from "../inputs/LecturerCreateWithoutUnitInput";
import { LecturerWhereUniqueInput } from "../inputs/LecturerWhereUniqueInput";

@TypeGraphQL.InputType("LecturerCreateOrConnectWithoutUnitInput", {
  isAbstract: true
})
export class LecturerCreateOrConnectWithoutUnitInput {
  @TypeGraphQL.Field(_type => LecturerWhereUniqueInput, {
    nullable: false
  })
  where!: LecturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => LecturerCreateWithoutUnitInput, {
    nullable: false
  })
  create!: LecturerCreateWithoutUnitInput;
}
