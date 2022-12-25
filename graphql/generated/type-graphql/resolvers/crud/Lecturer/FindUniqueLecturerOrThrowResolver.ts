import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLecturerOrThrowArgs } from "./args/FindUniqueLecturerOrThrowArgs";
import { Lecturer } from "../../../models/Lecturer";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lecturer)
export class FindUniqueLecturerOrThrowResolver {
  @TypeGraphQL.Query(_returns => Lecturer, {
    nullable: true
  })
  async getLecturer(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueLecturerOrThrowArgs): Promise<Lecturer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lecturer.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
