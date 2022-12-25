import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLecturerOrThrowArgs } from "./args/FindFirstLecturerOrThrowArgs";
import { Lecturer } from "../../../models/Lecturer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lecturer)
export class FindFirstLecturerOrThrowResolver {
  @TypeGraphQL.Query(_returns => Lecturer, {
    nullable: true
  })
  async findFirstLecturerOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstLecturerOrThrowArgs): Promise<Lecturer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lecturer.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
