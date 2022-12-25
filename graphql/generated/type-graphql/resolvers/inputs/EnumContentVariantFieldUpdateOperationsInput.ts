import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContentVariant } from "../../enums/ContentVariant";

@TypeGraphQL.InputType("EnumContentVariantFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumContentVariantFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ContentVariant, {
    nullable: true
  })
  set?: "Video" | "Assignment" | "Content" | undefined;
}
