import * as TypeGraphQL from "type-graphql";
import { Lecturer } from "../../../models/Lecturer";
import { Unit } from "../../../models/Unit";
import { LecturerUnitArgs } from "./args/LecturerUnitArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Lecturer)
export class LecturerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Unit], {
    nullable: false
  })
  async unit(@TypeGraphQL.Root() lecturer: Lecturer, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: LecturerUnitArgs): Promise<Unit[]> {
    return getPrismaFromContext(ctx).lecturer.findUnique({
      where: {
        id: lecturer.id,
      },
    }).unit(args);
  }
}
