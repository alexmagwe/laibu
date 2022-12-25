import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateManyLecturerInputEnvelope } from "../inputs/UnitCreateManyLecturerInputEnvelope";
import { UnitCreateOrConnectWithoutLecturerInput } from "../inputs/UnitCreateOrConnectWithoutLecturerInput";
import { UnitCreateWithoutLecturerInput } from "../inputs/UnitCreateWithoutLecturerInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateNestedManyWithoutLecturerInput", {
  isAbstract: true
})
export class UnitCreateNestedManyWithoutLecturerInput {
  @TypeGraphQL.Field(_type => [UnitCreateWithoutLecturerInput], {
    nullable: true
  })
  create?: UnitCreateWithoutLecturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitCreateOrConnectWithoutLecturerInput], {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutLecturerInput[] | undefined;

  @TypeGraphQL.Field(_type => UnitCreateManyLecturerInputEnvelope, {
    nullable: true
  })
  createMany?: UnitCreateManyLecturerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereUniqueInput], {
    nullable: true
  })
  connect?: UnitWhereUniqueInput[] | undefined;
}
