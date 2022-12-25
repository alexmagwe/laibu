import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Course: crudResolvers.CourseCrudResolver,
  Unit: crudResolvers.UnitCrudResolver,
  Lecturer: crudResolvers.LecturerCrudResolver,
  Content: crudResolvers.ContentCrudResolver,
  Question: crudResolvers.QuestionCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Course: {
    aggregateCourse: actionResolvers.AggregateCourseResolver,
    createManyCourse: actionResolvers.CreateManyCourseResolver,
    createOneCourse: actionResolvers.CreateOneCourseResolver,
    deleteManyCourse: actionResolvers.DeleteManyCourseResolver,
    deleteOneCourse: actionResolvers.DeleteOneCourseResolver,
    findFirstCourse: actionResolvers.FindFirstCourseResolver,
    findFirstCourseOrThrow: actionResolvers.FindFirstCourseOrThrowResolver,
    courses: actionResolvers.FindManyCourseResolver,
    course: actionResolvers.FindUniqueCourseResolver,
    getCourse: actionResolvers.FindUniqueCourseOrThrowResolver,
    groupByCourse: actionResolvers.GroupByCourseResolver,
    updateManyCourse: actionResolvers.UpdateManyCourseResolver,
    updateOneCourse: actionResolvers.UpdateOneCourseResolver,
    upsertOneCourse: actionResolvers.UpsertOneCourseResolver
  },
  Unit: {
    aggregateUnit: actionResolvers.AggregateUnitResolver,
    createManyUnit: actionResolvers.CreateManyUnitResolver,
    createOneUnit: actionResolvers.CreateOneUnitResolver,
    deleteManyUnit: actionResolvers.DeleteManyUnitResolver,
    deleteOneUnit: actionResolvers.DeleteOneUnitResolver,
    findFirstUnit: actionResolvers.FindFirstUnitResolver,
    findFirstUnitOrThrow: actionResolvers.FindFirstUnitOrThrowResolver,
    units: actionResolvers.FindManyUnitResolver,
    unit: actionResolvers.FindUniqueUnitResolver,
    getUnit: actionResolvers.FindUniqueUnitOrThrowResolver,
    groupByUnit: actionResolvers.GroupByUnitResolver,
    updateManyUnit: actionResolvers.UpdateManyUnitResolver,
    updateOneUnit: actionResolvers.UpdateOneUnitResolver,
    upsertOneUnit: actionResolvers.UpsertOneUnitResolver
  },
  Lecturer: {
    aggregateLecturer: actionResolvers.AggregateLecturerResolver,
    createManyLecturer: actionResolvers.CreateManyLecturerResolver,
    createOneLecturer: actionResolvers.CreateOneLecturerResolver,
    deleteManyLecturer: actionResolvers.DeleteManyLecturerResolver,
    deleteOneLecturer: actionResolvers.DeleteOneLecturerResolver,
    findFirstLecturer: actionResolvers.FindFirstLecturerResolver,
    findFirstLecturerOrThrow: actionResolvers.FindFirstLecturerOrThrowResolver,
    lecturers: actionResolvers.FindManyLecturerResolver,
    lecturer: actionResolvers.FindUniqueLecturerResolver,
    getLecturer: actionResolvers.FindUniqueLecturerOrThrowResolver,
    groupByLecturer: actionResolvers.GroupByLecturerResolver,
    updateManyLecturer: actionResolvers.UpdateManyLecturerResolver,
    updateOneLecturer: actionResolvers.UpdateOneLecturerResolver,
    upsertOneLecturer: actionResolvers.UpsertOneLecturerResolver
  },
  Content: {
    aggregateContent: actionResolvers.AggregateContentResolver,
    createManyContent: actionResolvers.CreateManyContentResolver,
    createOneContent: actionResolvers.CreateOneContentResolver,
    deleteManyContent: actionResolvers.DeleteManyContentResolver,
    deleteOneContent: actionResolvers.DeleteOneContentResolver,
    findFirstContent: actionResolvers.FindFirstContentResolver,
    findFirstContentOrThrow: actionResolvers.FindFirstContentOrThrowResolver,
    contents: actionResolvers.FindManyContentResolver,
    content: actionResolvers.FindUniqueContentResolver,
    getContent: actionResolvers.FindUniqueContentOrThrowResolver,
    groupByContent: actionResolvers.GroupByContentResolver,
    updateManyContent: actionResolvers.UpdateManyContentResolver,
    updateOneContent: actionResolvers.UpdateOneContentResolver,
    upsertOneContent: actionResolvers.UpsertOneContentResolver
  },
  Question: {
    aggregateQuestion: actionResolvers.AggregateQuestionResolver,
    createManyQuestion: actionResolvers.CreateManyQuestionResolver,
    createOneQuestion: actionResolvers.CreateOneQuestionResolver,
    deleteManyQuestion: actionResolvers.DeleteManyQuestionResolver,
    deleteOneQuestion: actionResolvers.DeleteOneQuestionResolver,
    findFirstQuestion: actionResolvers.FindFirstQuestionResolver,
    findFirstQuestionOrThrow: actionResolvers.FindFirstQuestionOrThrowResolver,
    questions: actionResolvers.FindManyQuestionResolver,
    question: actionResolvers.FindUniqueQuestionResolver,
    getQuestion: actionResolvers.FindUniqueQuestionOrThrowResolver,
    groupByQuestion: actionResolvers.GroupByQuestionResolver,
    updateManyQuestion: actionResolvers.UpdateManyQuestionResolver,
    updateOneQuestion: actionResolvers.UpdateOneQuestionResolver,
    upsertOneQuestion: actionResolvers.UpsertOneQuestionResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Course: ["aggregateCourse", "createManyCourse", "createOneCourse", "deleteManyCourse", "deleteOneCourse", "findFirstCourse", "findFirstCourseOrThrow", "courses", "course", "getCourse", "groupByCourse", "updateManyCourse", "updateOneCourse", "upsertOneCourse"],
  Unit: ["aggregateUnit", "createManyUnit", "createOneUnit", "deleteManyUnit", "deleteOneUnit", "findFirstUnit", "findFirstUnitOrThrow", "units", "unit", "getUnit", "groupByUnit", "updateManyUnit", "updateOneUnit", "upsertOneUnit"],
  Lecturer: ["aggregateLecturer", "createManyLecturer", "createOneLecturer", "deleteManyLecturer", "deleteOneLecturer", "findFirstLecturer", "findFirstLecturerOrThrow", "lecturers", "lecturer", "getLecturer", "groupByLecturer", "updateManyLecturer", "updateOneLecturer", "upsertOneLecturer"],
  Content: ["aggregateContent", "createManyContent", "createOneContent", "deleteManyContent", "deleteOneContent", "findFirstContent", "findFirstContentOrThrow", "contents", "content", "getContent", "groupByContent", "updateManyContent", "updateOneContent", "upsertOneContent"],
  Question: ["aggregateQuestion", "createManyQuestion", "createOneQuestion", "deleteManyQuestion", "deleteOneQuestion", "findFirstQuestion", "findFirstQuestionOrThrow", "questions", "question", "getQuestion", "groupByQuestion", "updateManyQuestion", "updateOneQuestion", "upsertOneQuestion"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateCourseArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCourseArgs: ["data", "skipDuplicates"],
  CreateOneCourseArgs: ["data"],
  DeleteManyCourseArgs: ["where"],
  DeleteOneCourseArgs: ["where"],
  FindFirstCourseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCourseOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCourseArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCourseArgs: ["where"],
  FindUniqueCourseOrThrowArgs: ["where"],
  GroupByCourseArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCourseArgs: ["data", "where"],
  UpdateOneCourseArgs: ["data", "where"],
  UpsertOneCourseArgs: ["where", "create", "update"],
  AggregateUnitArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUnitArgs: ["data", "skipDuplicates"],
  CreateOneUnitArgs: ["data"],
  DeleteManyUnitArgs: ["where"],
  DeleteOneUnitArgs: ["where"],
  FindFirstUnitArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUnitOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUnitArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUnitArgs: ["where"],
  FindUniqueUnitOrThrowArgs: ["where"],
  GroupByUnitArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUnitArgs: ["data", "where"],
  UpdateOneUnitArgs: ["data", "where"],
  UpsertOneUnitArgs: ["where", "create", "update"],
  AggregateLecturerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyLecturerArgs: ["data", "skipDuplicates"],
  CreateOneLecturerArgs: ["data"],
  DeleteManyLecturerArgs: ["where"],
  DeleteOneLecturerArgs: ["where"],
  FindFirstLecturerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstLecturerOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyLecturerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueLecturerArgs: ["where"],
  FindUniqueLecturerOrThrowArgs: ["where"],
  GroupByLecturerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyLecturerArgs: ["data", "where"],
  UpdateOneLecturerArgs: ["data", "where"],
  UpsertOneLecturerArgs: ["where", "create", "update"],
  AggregateContentArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyContentArgs: ["data", "skipDuplicates"],
  CreateOneContentArgs: ["data"],
  DeleteManyContentArgs: ["where"],
  DeleteOneContentArgs: ["where"],
  FindFirstContentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstContentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyContentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueContentArgs: ["where"],
  FindUniqueContentOrThrowArgs: ["where"],
  GroupByContentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyContentArgs: ["data", "where"],
  UpdateOneContentArgs: ["data", "where"],
  UpsertOneContentArgs: ["where", "create", "update"],
  AggregateQuestionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyQuestionArgs: ["data", "skipDuplicates"],
  CreateOneQuestionArgs: ["data"],
  DeleteManyQuestionArgs: ["where"],
  DeleteOneQuestionArgs: ["where"],
  FindFirstQuestionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstQuestionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyQuestionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueQuestionArgs: ["where"],
  FindUniqueQuestionOrThrowArgs: ["where"],
  GroupByQuestionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyQuestionArgs: ["data", "where"],
  UpdateOneQuestionArgs: ["data", "where"],
  UpsertOneQuestionArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Course: relationResolvers.CourseRelationsResolver,
  Unit: relationResolvers.UnitRelationsResolver,
  Lecturer: relationResolvers.LecturerRelationsResolver,
  Content: relationResolvers.ContentRelationsResolver,
  Question: relationResolvers.QuestionRelationsResolver
};
const relationResolversInfo = {
  User: ["course"],
  Course: ["users", "units"],
  Unit: ["course", "content", "lecturer", "questions"],
  Lecturer: ["unit"],
  Content: ["unit"],
  Question: ["unit"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "username", "courseId", "role", "semester", "year"],
  Course: ["id", "name"],
  Unit: ["id", "name", "code", "year", "semester", "lecturerId"],
  Lecturer: ["id", "firstName", "lastName", "email", "contactInfo"],
  Content: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  Question: ["id", "question", "answer", "createdAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "email", "username", "courseId", "role", "semester", "year", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCourse: ["_count", "_min", "_max"],
  CourseGroupBy: ["id", "name", "_count", "_min", "_max"],
  AggregateUnit: ["_count", "_avg", "_sum", "_min", "_max"],
  UnitGroupBy: ["id", "name", "code", "year", "semester", "lecturerId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateLecturer: ["_count", "_min", "_max"],
  LecturerGroupBy: ["id", "firstName", "lastName", "email", "contactInfo", "_count", "_min", "_max"],
  AggregateContent: ["_count", "_avg", "_sum", "_min", "_max"],
  ContentGroupBy: ["id", "name", "size", "uploadDate", "hidden", "url", "type", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateQuestion: ["_count", "_min", "_max"],
  QuestionGroupBy: ["id", "question", "answer", "createdAt", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["course"],
  UserCountAggregate: ["id", "email", "username", "courseId", "role", "semester", "year", "_all"],
  UserAvgAggregate: ["courseId", "semester", "year"],
  UserSumAggregate: ["courseId", "semester", "year"],
  UserMinAggregate: ["id", "email", "username", "courseId", "role", "semester", "year"],
  UserMaxAggregate: ["id", "email", "username", "courseId", "role", "semester", "year"],
  CourseCount: ["users", "units"],
  CourseCountAggregate: ["id", "name", "_all"],
  CourseMinAggregate: ["id", "name"],
  CourseMaxAggregate: ["id", "name"],
  UnitCount: ["course", "content", "questions"],
  UnitCountAggregate: ["id", "name", "code", "year", "semester", "lecturerId", "_all"],
  UnitAvgAggregate: ["year", "semester"],
  UnitSumAggregate: ["year", "semester"],
  UnitMinAggregate: ["id", "name", "code", "year", "semester", "lecturerId"],
  UnitMaxAggregate: ["id", "name", "code", "year", "semester", "lecturerId"],
  LecturerCount: ["unit"],
  LecturerCountAggregate: ["id", "firstName", "lastName", "email", "contactInfo", "_all"],
  LecturerMinAggregate: ["id", "firstName", "lastName", "email", "contactInfo"],
  LecturerMaxAggregate: ["id", "firstName", "lastName", "email", "contactInfo"],
  ContentCount: ["unit"],
  ContentCountAggregate: ["id", "name", "size", "uploadDate", "hidden", "url", "type", "_all"],
  ContentAvgAggregate: ["size"],
  ContentSumAggregate: ["size"],
  ContentMinAggregate: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  ContentMaxAggregate: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  QuestionCount: ["unit"],
  QuestionCountAggregate: ["id", "question", "answer", "createdAt", "_all"],
  QuestionMinAggregate: ["id", "question", "answer", "createdAt"],
  QuestionMaxAggregate: ["id", "question", "answer", "createdAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "courseId", "role", "course", "semester", "year"],
  UserOrderByWithRelationInput: ["id", "email", "username", "courseId", "role", "course", "semester", "year"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "email", "username", "courseId", "role", "semester", "year", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "username", "courseId", "role", "semester", "year"],
  CourseWhereInput: ["AND", "OR", "NOT", "id", "users", "name", "units"],
  CourseOrderByWithRelationInput: ["id", "users", "name", "units"],
  CourseWhereUniqueInput: ["id"],
  CourseOrderByWithAggregationInput: ["id", "name", "_count", "_max", "_min"],
  CourseScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  UnitWhereInput: ["AND", "OR", "NOT", "id", "course", "name", "code", "year", "semester", "content", "lecturer", "lecturerId", "questions"],
  UnitOrderByWithRelationInput: ["id", "course", "name", "code", "year", "semester", "content", "lecturer", "lecturerId", "questions"],
  UnitWhereUniqueInput: ["id", "code"],
  UnitOrderByWithAggregationInput: ["id", "name", "code", "year", "semester", "lecturerId", "_count", "_avg", "_max", "_min", "_sum"],
  UnitScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "code", "year", "semester", "lecturerId"],
  LecturerWhereInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "unit", "email", "contactInfo"],
  LecturerOrderByWithRelationInput: ["id", "firstName", "lastName", "unit", "email", "contactInfo"],
  LecturerWhereUniqueInput: ["id", "email"],
  LecturerOrderByWithAggregationInput: ["id", "firstName", "lastName", "email", "contactInfo", "_count", "_max", "_min"],
  LecturerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "contactInfo"],
  ContentWhereInput: ["AND", "OR", "NOT", "id", "name", "size", "uploadDate", "hidden", "unit", "url", "type"],
  ContentOrderByWithRelationInput: ["id", "name", "size", "uploadDate", "hidden", "unit", "url", "type"],
  ContentWhereUniqueInput: ["id", "name", "url"],
  ContentOrderByWithAggregationInput: ["id", "name", "size", "uploadDate", "hidden", "url", "type", "_count", "_avg", "_max", "_min", "_sum"],
  ContentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "size", "uploadDate", "hidden", "url", "type"],
  QuestionWhereInput: ["AND", "OR", "NOT", "id", "question", "answer", "createdAt", "unit"],
  QuestionOrderByWithRelationInput: ["id", "question", "answer", "createdAt", "unit"],
  QuestionWhereUniqueInput: ["id"],
  QuestionOrderByWithAggregationInput: ["id", "question", "answer", "createdAt", "_count", "_max", "_min"],
  QuestionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "question", "answer", "createdAt"],
  UserCreateInput: ["id", "email", "username", "courseId", "role", "course", "semester", "year"],
  UserUpdateInput: ["id", "email", "username", "courseId", "role", "course", "semester", "year"],
  UserCreateManyInput: ["id", "email", "username", "courseId", "role", "semester", "year"],
  UserUpdateManyMutationInput: ["id", "email", "username", "courseId", "role", "semester", "year"],
  CourseCreateInput: ["id", "users", "name", "units"],
  CourseUpdateInput: ["id", "users", "name", "units"],
  CourseCreateManyInput: ["id", "name"],
  CourseUpdateManyMutationInput: ["id", "name"],
  UnitCreateInput: ["id", "course", "name", "code", "year", "semester", "content", "lecturer", "questions"],
  UnitUpdateInput: ["id", "course", "name", "code", "year", "semester", "content", "lecturer", "questions"],
  UnitCreateManyInput: ["id", "name", "code", "year", "semester", "lecturerId"],
  UnitUpdateManyMutationInput: ["id", "name", "code", "year", "semester"],
  LecturerCreateInput: ["id", "firstName", "lastName", "unit", "email", "contactInfo"],
  LecturerUpdateInput: ["id", "firstName", "lastName", "unit", "email", "contactInfo"],
  LecturerCreateManyInput: ["id", "firstName", "lastName", "email", "contactInfo"],
  LecturerUpdateManyMutationInput: ["id", "firstName", "lastName", "email", "contactInfo"],
  ContentCreateInput: ["id", "name", "size", "uploadDate", "hidden", "unit", "url", "type"],
  ContentUpdateInput: ["id", "name", "size", "uploadDate", "hidden", "unit", "url", "type"],
  ContentCreateManyInput: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  ContentUpdateManyMutationInput: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  QuestionCreateInput: ["id", "question", "answer", "createdAt", "unit"],
  QuestionUpdateInput: ["id", "question", "answer", "createdAt", "unit"],
  QuestionCreateManyInput: ["id", "question", "answer", "createdAt"],
  QuestionUpdateManyMutationInput: ["id", "question", "answer", "createdAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  CourseListRelationFilter: ["every", "some", "none"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CourseOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "username", "courseId", "role", "semester", "year"],
  UserAvgOrderByAggregateInput: ["courseId", "semester", "year"],
  UserMaxOrderByAggregateInput: ["id", "email", "username", "courseId", "role", "semester", "year"],
  UserMinOrderByAggregateInput: ["id", "email", "username", "courseId", "role", "semester", "year"],
  UserSumOrderByAggregateInput: ["courseId", "semester", "year"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserListRelationFilter: ["every", "some", "none"],
  UnitListRelationFilter: ["every", "some", "none"],
  UserOrderByRelationAggregateInput: ["_count"],
  UnitOrderByRelationAggregateInput: ["_count"],
  CourseCountOrderByAggregateInput: ["id", "name"],
  CourseMaxOrderByAggregateInput: ["id", "name"],
  CourseMinOrderByAggregateInput: ["id", "name"],
  ContentListRelationFilter: ["every", "some", "none"],
  LecturerRelationFilter: ["is", "isNot"],
  QuestionListRelationFilter: ["every", "some", "none"],
  ContentOrderByRelationAggregateInput: ["_count"],
  QuestionOrderByRelationAggregateInput: ["_count"],
  UnitCountOrderByAggregateInput: ["id", "name", "code", "year", "semester", "lecturerId"],
  UnitAvgOrderByAggregateInput: ["year", "semester"],
  UnitMaxOrderByAggregateInput: ["id", "name", "code", "year", "semester", "lecturerId"],
  UnitMinOrderByAggregateInput: ["id", "name", "code", "year", "semester", "lecturerId"],
  UnitSumOrderByAggregateInput: ["year", "semester"],
  LecturerCountOrderByAggregateInput: ["id", "firstName", "lastName", "email", "contactInfo"],
  LecturerMaxOrderByAggregateInput: ["id", "firstName", "lastName", "email", "contactInfo"],
  LecturerMinOrderByAggregateInput: ["id", "firstName", "lastName", "email", "contactInfo"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  EnumContentVariantFilter: ["equals", "in", "notIn", "not"],
  ContentCountOrderByAggregateInput: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  ContentAvgOrderByAggregateInput: ["size"],
  ContentMaxOrderByAggregateInput: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  ContentMinOrderByAggregateInput: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  ContentSumOrderByAggregateInput: ["size"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumContentVariantWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  QuestionCountOrderByAggregateInput: ["id", "question", "answer", "createdAt"],
  QuestionMaxOrderByAggregateInput: ["id", "question", "answer", "createdAt"],
  QuestionMinOrderByAggregateInput: ["id", "question", "answer", "createdAt"],
  CourseCreateNestedManyWithoutUsersInput: ["create", "connectOrCreate", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  CourseUpdateManyWithoutUsersNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedManyWithoutCourseInput: ["create", "connectOrCreate", "connect"],
  UnitCreateNestedManyWithoutCourseInput: ["create", "connectOrCreate", "connect"],
  UserUpdateManyWithoutCourseNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UnitUpdateManyWithoutCourseNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CourseCreateNestedManyWithoutUnitsInput: ["create", "connectOrCreate", "connect"],
  ContentCreateNestedManyWithoutUnitInput: ["create", "connectOrCreate", "connect"],
  LecturerCreateNestedOneWithoutUnitInput: ["create", "connectOrCreate", "connect"],
  QuestionCreateNestedManyWithoutUnitInput: ["create", "connectOrCreate", "connect"],
  CourseUpdateManyWithoutUnitsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ContentUpdateManyWithoutUnitNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  LecturerUpdateOneRequiredWithoutUnitNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  QuestionUpdateManyWithoutUnitNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UnitCreateNestedManyWithoutLecturerInput: ["create", "connectOrCreate", "createMany", "connect"],
  UnitUpdateManyWithoutLecturerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UnitCreateNestedManyWithoutContentInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  UnitUpdateManyWithoutContentNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EnumContentVariantFieldUpdateOperationsInput: ["set"],
  UnitCreateNestedManyWithoutQuestionsInput: ["create", "connectOrCreate", "connect"],
  UnitUpdateManyWithoutQuestionsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumContentVariantFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumContentVariantWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  CourseCreateWithoutUsersInput: ["id", "name", "units"],
  CourseCreateOrConnectWithoutUsersInput: ["where", "create"],
  CourseUpsertWithWhereUniqueWithoutUsersInput: ["where", "update", "create"],
  CourseUpdateWithWhereUniqueWithoutUsersInput: ["where", "data"],
  CourseUpdateManyWithWhereWithoutUsersInput: ["where", "data"],
  CourseScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  UserCreateWithoutCourseInput: ["id", "email", "username", "courseId", "role", "semester", "year"],
  UserCreateOrConnectWithoutCourseInput: ["where", "create"],
  UnitCreateWithoutCourseInput: ["id", "name", "code", "year", "semester", "content", "lecturer", "questions"],
  UnitCreateOrConnectWithoutCourseInput: ["where", "create"],
  UserUpsertWithWhereUniqueWithoutCourseInput: ["where", "update", "create"],
  UserUpdateWithWhereUniqueWithoutCourseInput: ["where", "data"],
  UserUpdateManyWithWhereWithoutCourseInput: ["where", "data"],
  UserScalarWhereInput: ["AND", "OR", "NOT", "id", "email", "username", "courseId", "role", "semester", "year"],
  UnitUpsertWithWhereUniqueWithoutCourseInput: ["where", "update", "create"],
  UnitUpdateWithWhereUniqueWithoutCourseInput: ["where", "data"],
  UnitUpdateManyWithWhereWithoutCourseInput: ["where", "data"],
  UnitScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "code", "year", "semester", "lecturerId"],
  CourseCreateWithoutUnitsInput: ["id", "users", "name"],
  CourseCreateOrConnectWithoutUnitsInput: ["where", "create"],
  ContentCreateWithoutUnitInput: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  ContentCreateOrConnectWithoutUnitInput: ["where", "create"],
  LecturerCreateWithoutUnitInput: ["id", "firstName", "lastName", "email", "contactInfo"],
  LecturerCreateOrConnectWithoutUnitInput: ["where", "create"],
  QuestionCreateWithoutUnitInput: ["id", "question", "answer", "createdAt"],
  QuestionCreateOrConnectWithoutUnitInput: ["where", "create"],
  CourseUpsertWithWhereUniqueWithoutUnitsInput: ["where", "update", "create"],
  CourseUpdateWithWhereUniqueWithoutUnitsInput: ["where", "data"],
  CourseUpdateManyWithWhereWithoutUnitsInput: ["where", "data"],
  ContentUpsertWithWhereUniqueWithoutUnitInput: ["where", "update", "create"],
  ContentUpdateWithWhereUniqueWithoutUnitInput: ["where", "data"],
  ContentUpdateManyWithWhereWithoutUnitInput: ["where", "data"],
  ContentScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "size", "uploadDate", "hidden", "url", "type"],
  LecturerUpsertWithoutUnitInput: ["update", "create"],
  LecturerUpdateWithoutUnitInput: ["id", "firstName", "lastName", "email", "contactInfo"],
  QuestionUpsertWithWhereUniqueWithoutUnitInput: ["where", "update", "create"],
  QuestionUpdateWithWhereUniqueWithoutUnitInput: ["where", "data"],
  QuestionUpdateManyWithWhereWithoutUnitInput: ["where", "data"],
  QuestionScalarWhereInput: ["AND", "OR", "NOT", "id", "question", "answer", "createdAt"],
  UnitCreateWithoutLecturerInput: ["id", "course", "name", "code", "year", "semester", "content", "questions"],
  UnitCreateOrConnectWithoutLecturerInput: ["where", "create"],
  UnitCreateManyLecturerInputEnvelope: ["data", "skipDuplicates"],
  UnitUpsertWithWhereUniqueWithoutLecturerInput: ["where", "update", "create"],
  UnitUpdateWithWhereUniqueWithoutLecturerInput: ["where", "data"],
  UnitUpdateManyWithWhereWithoutLecturerInput: ["where", "data"],
  UnitCreateWithoutContentInput: ["id", "course", "name", "code", "year", "semester", "lecturer", "questions"],
  UnitCreateOrConnectWithoutContentInput: ["where", "create"],
  UnitUpsertWithWhereUniqueWithoutContentInput: ["where", "update", "create"],
  UnitUpdateWithWhereUniqueWithoutContentInput: ["where", "data"],
  UnitUpdateManyWithWhereWithoutContentInput: ["where", "data"],
  UnitCreateWithoutQuestionsInput: ["id", "course", "name", "code", "year", "semester", "content", "lecturer"],
  UnitCreateOrConnectWithoutQuestionsInput: ["where", "create"],
  UnitUpsertWithWhereUniqueWithoutQuestionsInput: ["where", "update", "create"],
  UnitUpdateWithWhereUniqueWithoutQuestionsInput: ["where", "data"],
  UnitUpdateManyWithWhereWithoutQuestionsInput: ["where", "data"],
  CourseUpdateWithoutUsersInput: ["id", "name", "units"],
  UserUpdateWithoutCourseInput: ["id", "email", "username", "courseId", "role", "semester", "year"],
  UnitUpdateWithoutCourseInput: ["id", "name", "code", "year", "semester", "content", "lecturer", "questions"],
  CourseUpdateWithoutUnitsInput: ["id", "users", "name"],
  ContentUpdateWithoutUnitInput: ["id", "name", "size", "uploadDate", "hidden", "url", "type"],
  QuestionUpdateWithoutUnitInput: ["id", "question", "answer", "createdAt"],
  UnitCreateManyLecturerInput: ["id", "name", "code", "year", "semester"],
  UnitUpdateWithoutLecturerInput: ["id", "course", "name", "code", "year", "semester", "content", "questions"],
  UnitUpdateWithoutContentInput: ["id", "course", "name", "code", "year", "semester", "lecturer", "questions"],
  UnitUpdateWithoutQuestionsInput: ["id", "course", "name", "code", "year", "semester", "content", "lecturer"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

