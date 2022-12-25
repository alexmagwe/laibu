import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateOrConnectWithoutContentInput } from "../inputs/UnitCreateOrConnectWithoutContentInput";
import { UnitCreateWithoutContentInput } from "../inputs/UnitCreateWithoutContentInput";
import { UnitWhereUniqueInput } from "../inputs/UnitWhereUniqueInput";

@TypeGraphQL.InputType("UnitCreateNestedManyWithoutContentInput", {
  isAbstract: true
})
export class UnitCreateNestedManyWithoutContentInput {
  @TypeGraphQL.Field(_type => [UnitCreateWithoutContentInput], {
    nullable: true
  })
  create?: UnitCreateWithoutContentInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitCreateOrConnectWithoutContentInput], {
    nullable: true
  })
  connectOrCreate?: UnitCreateOrConnectWithoutContentInput[] | undefined;

  @TypeGraphQL.Field(_type => [UnitWhereUniqueInput], {
    nullable: true
  })
  connect?: UnitWhereUniqueInput[] | undefined;
}
