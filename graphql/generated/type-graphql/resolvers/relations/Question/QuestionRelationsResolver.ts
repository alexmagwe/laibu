import * as TypeGraphQL from "type-graphql";
import { Question } from "../../../models/Question";
import { Unit } from "../../../models/Unit";
import { QuestionUnitArgs } from "./args/QuestionUnitArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Question)
export class QuestionRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Unit], {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() question: Question, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: QuestionUnitArgs): Promise<Unit[]> {
    return getPrismaFromContext(ctx).question.findUnique({
      where: {
        id: question.id,
      },
    }).unit(args);
  }
}
