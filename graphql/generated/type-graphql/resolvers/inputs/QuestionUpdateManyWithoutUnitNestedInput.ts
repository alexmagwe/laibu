import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { QuestionCreateOrConnectWithoutUnitInput } from "../inputs/QuestionCreateOrConnectWithoutUnitInput";
import { QuestionCreateWithoutUnitInput } from "../inputs/QuestionCreateWithoutUnitInput";
import { QuestionScalarWhereInput } from "../inputs/QuestionScalarWhereInput";
import { QuestionUpdateManyWithWhereWithoutUnitInput } from "../inputs/QuestionUpdateManyWithWhereWithoutUnitInput";
import { QuestionUpdateWithWhereUniqueWithoutUnitInput } from "../inputs/QuestionUpdateWithWhereUniqueWithoutUnitInput";
import { QuestionUpsertWithWhereUniqueWithoutUnitInput } from "../inputs/QuestionUpsertWithWhereUniqueWithoutUnitInput";
import { QuestionWhereUniqueInput } from "../inputs/QuestionWhereUniqueInput";

@TypeGraphQL.InputType("QuestionUpdateManyWithoutUnitNestedInput", {
  isAbstract: true
})
export class QuestionUpdateManyWithoutUnitNestedInput {
  @TypeGraphQL.Field(_type => [QuestionCreateWithoutUnitInput], {
    nullable: true
  })
  create?: QuestionCreateWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionCreateOrConnectWithoutUnitInput], {
    nullable: true
  })
  connectOrCreate?: QuestionCreateOrConnectWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionUpsertWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  upsert?: QuestionUpsertWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  set?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  delete?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionWhereUniqueInput], {
    nullable: true
  })
  connect?: QuestionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionUpdateWithWhereUniqueWithoutUnitInput], {
    nullable: true
  })
  update?: QuestionUpdateWithWhereUniqueWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionUpdateManyWithWhereWithoutUnitInput], {
    nullable: true
  })
  updateMany?: QuestionUpdateManyWithWhereWithoutUnitInput[] | undefined;

  @TypeGraphQL.Field(_type => [QuestionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: QuestionScalarWhereInput[] | undefined;
}
