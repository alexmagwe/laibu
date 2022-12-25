import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateContentArgs } from "./args/AggregateContentArgs";
import { Content } from "../../../models/Content";
import { AggregateContent } from "../../outputs/AggregateContent";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Content)
export class AggregateContentResolver {
  @TypeGraphQL.Query(_returns => AggregateContent, {
    nullable: false
  })
  async aggregateContent(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateContentArgs): Promise<AggregateContent> {
    return getPrismaFromContext(ctx).content.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
