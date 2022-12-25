import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLecturerArgs } from "./args/AggregateLecturerArgs";
import { Lecturer } from "../../../models/Lecturer";
import { AggregateLecturer } from "../../outputs/AggregateLecturer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lecturer)
export class AggregateLecturerResolver {
  @TypeGraphQL.Query(_returns => AggregateLecturer, {
    nullable: false
  })
  async aggregateLecturer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateLecturerArgs): Promise<AggregateLecturer> {
    return getPrismaFromContext(ctx).lecturer.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
