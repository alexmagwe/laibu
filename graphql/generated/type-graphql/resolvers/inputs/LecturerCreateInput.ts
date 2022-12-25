import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateNestedManyWithoutLecturerInput } from "../inputs/UnitCreateNestedManyWithoutLecturerInput";

@TypeGraphQL.InputType("LecturerCreateInput", {
  isAbstract: true
})
export class LecturerCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => UnitCreateNestedManyWithoutLecturerInput, {
    nullable: true
  })
  unit?: UnitCreateNestedManyWithoutLecturerInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contactInfo?: string | undefined;
}
