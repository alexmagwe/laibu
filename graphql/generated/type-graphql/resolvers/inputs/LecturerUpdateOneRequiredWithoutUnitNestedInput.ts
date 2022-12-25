import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LecturerCreateOrConnectWithoutUnitInput } from "../inputs/LecturerCreateOrConnectWithoutUnitInput";
import { LecturerCreateWithoutUnitInput } from "../inputs/LecturerCreateWithoutUnitInput";
import { LecturerUpdateWithoutUnitInput } from "../inputs/LecturerUpdateWithoutUnitInput";
import { LecturerUpsertWithoutUnitInput } from "../inputs/LecturerUpsertWithoutUnitInput";
import { LecturerWhereUniqueInput } from "../inputs/LecturerWhereUniqueInput";

@TypeGraphQL.InputType("LecturerUpdateOneRequiredWithoutUnitNestedInput", {
  isAbstract: true
})
export class LecturerUpdateOneRequiredWithoutUnitNestedInput {
  @TypeGraphQL.Field(_type => LecturerCreateWithoutUnitInput, {
    nullable: true
  })
  create?: LecturerCreateWithoutUnitInput | undefined;

  @TypeGraphQL.Field(_type => LecturerCreateOrConnectWithoutUnitInput, {
    nullable: true
  })
  connectOrCreate?: LecturerCreateOrConnectWithoutUnitInput | undefined;

  @TypeGraphQL.Field(_type => LecturerUpsertWithoutUnitInput, {
    nullable: true
  })
  upsert?: LecturerUpsertWithoutUnitInput | undefined;

  @TypeGraphQL.Field(_type => LecturerWhereUniqueInput, {
    nullable: true
  })
  connect?: LecturerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LecturerUpdateWithoutUnitInput, {
    nullable: true
  })
  update?: LecturerUpdateWithoutUnitInput | undefined;
}
