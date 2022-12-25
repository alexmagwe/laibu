import * as TypeGraphQL from "type-graphql";
import { Content } from "../../../models/Content";
import { Course } from "../../../models/Course";
import { Lecturer } from "../../../models/Lecturer";
import { Question } from "../../../models/Question";
import { Unit } from "../../../models/Unit";
import { UnitContentArgs } from "./args/UnitContentArgs";
import { UnitCourseArgs } from "./args/UnitCourseArgs";
import { UnitQuestionsArgs } from "./args/UnitQuestionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Unit)
export class UnitRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Course], {
    nullable: false
  })
  async course(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UnitCourseArgs): Promise<Course[]> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).course(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Content], {
    nullable: false
  })
  async content(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UnitContentArgs): Promise<Content[]> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).content(args);
  }

  @TypeGraphQL.FieldResolver(_type => Lecturer, {
    nullable: false
  })
  async lecturer(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any): Promise<Lecturer> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).lecturer({});
  }

  @TypeGraphQL.FieldResolver(_type => [Question], {
    nullable: false
  })
  async questions(@TypeGraphQL.Root() unit: Unit, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UnitQuestionsArgs): Promise<Question[]> {
    return getPrismaFromContext(ctx).unit.findUnique({
      where: {
        id: unit.id,
      },
    }).questions(args);
  }
}
