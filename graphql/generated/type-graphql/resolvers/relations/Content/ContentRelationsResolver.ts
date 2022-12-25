import * as TypeGraphQL from "type-graphql";
import { Content } from "../../../models/Content";
import { Unit } from "../../../models/Unit";
import { ContentUnitArgs } from "./args/ContentUnitArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Content)
export class ContentRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Unit], {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() content: Content, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ContentUnitArgs): Promise<Unit[]> {
    return getPrismaFromContext(ctx).content.findUnique({
      where: {
        id: content.id,
      },
    }).unit(args);
  }
}
