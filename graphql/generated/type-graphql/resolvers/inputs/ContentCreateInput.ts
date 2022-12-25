import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UnitCreateNestedManyWithoutContentInput } from "../inputs/UnitCreateNestedManyWithoutContentInput";
import { ContentVariant } from "../../enums/ContentVariant";

@TypeGraphQL.InputType("ContentCreateInput", {
  isAbstract: true
})
export class ContentCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  size?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  uploadDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hidden?: boolean | undefined;

  @TypeGraphQL.Field(_type => UnitCreateNestedManyWithoutContentInput, {
    nullable: true
  })
  unit?: UnitCreateNestedManyWithoutContentInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  url!: string;

  @TypeGraphQL.Field(_type => ContentVariant, {
    nullable: true
  })
  type?: "Video" | "Assignment" | "Content" | undefined;
}
