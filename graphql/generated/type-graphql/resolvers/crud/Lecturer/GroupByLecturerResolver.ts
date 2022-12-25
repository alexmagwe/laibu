import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByLecturerArgs } from "./args/GroupByLecturerArgs";
import { Lecturer } from "../../../models/Lecturer";
import { LecturerGroupBy } from "../../outputs/LecturerGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lecturer)
export class GroupByLecturerResolver {
  @TypeGraphQL.Query(_returns => [LecturerGroupBy], {
    nullable: false
  })
  async groupByLecturer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByLecturerArgs): Promise<LecturerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lecturer.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
