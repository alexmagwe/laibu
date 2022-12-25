import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LecturerCreateOrConnectWithoutUnitInput } from "../inputs/LecturerCreateOrConnectWithoutUnitInput";
import { LecturerCreateWithoutUnitInput } from "../inputs/LecturerCreateWithoutUnitInput";
import { LecturerWhereUniqueInput } from "../inputs/LecturerWhereUniqueInput";

@TypeGraphQL.InputType("LecturerCreateNestedOneWithoutUnitInput", {
  isAbstract: true
})
export class LecturerCreateNestedOneWithoutUnitInput {
  @TypeGraphQL.Field(_type => LecturerCreateWithoutUnitInput, {
    nullable: true
  })
  create?: LecturerCreateWithoutUnitInput | undefined;

  @TypeGraphQL.Field(_type => LecturerCreateOrConnectWithoutUnitInput, {
    nullable: true
  })
  connectOrCreate?: LecturerCreateOrConnectWithoutUnitInput | undefined;

  @TypeGraphQL.Field(_type => LecturerWhereUniqueInput, {
    nullable: true
  })
  connect?: LecturerWhereUniqueInput | undefined;
}
