import * as TypeGraphQL from "type-graphql";
import { Course } from "../../../models/Course";
import { Unit } from "../../../models/Unit";
import { User } from "../../../models/User";
import { CourseUnitsArgs } from "./args/CourseUnitsArgs";
import { CourseUsersArgs } from "./args/CourseUsersArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Course)
export class CourseRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [User], {
    nullable: false
  })
  async users(@TypeGraphQL.Root() course: Course, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseUsersArgs): Promise<User[]> {
    return getPrismaFromContext(ctx).course.findUnique({
      where: {
        id: course.id,
      },
    }).users(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Unit], {
    nullable: false
  })
  async units(@TypeGraphQL.Root() course: Course, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CourseUnitsArgs): Promise<Unit[]> {
    return getPrismaFromContext(ctx).course.findUnique({
      where: {
        id: course.id,
      },
    }).units(args);
  }
}
