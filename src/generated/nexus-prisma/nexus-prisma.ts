// GENERATED TYPES FOR NEXUS-PRISMA. /!\ DO NOT EDIT MANUALLY

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      User: UserObject
      Story: StoryObject
      UserConnection: UserConnectionObject
      PageInfo: PageInfoObject
      UserEdge: UserEdgeObject
      AggregateUser: AggregateUserObject
      StoryConnection: StoryConnectionObject
      StoryEdge: StoryEdgeObject
      AggregateStory: AggregateStoryObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      UserSubscriptionPayload: UserSubscriptionPayloadObject
      UserPreviousValues: UserPreviousValuesObject
      StorySubscriptionPayload: StorySubscriptionPayloadObject
      StoryPreviousValues: StoryPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      User: UserFieldDetails
      Story: StoryFieldDetails
      UserConnection: UserConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      UserEdge: UserEdgeFieldDetails
      AggregateUser: AggregateUserFieldDetails
      StoryConnection: StoryConnectionFieldDetails
      StoryEdge: StoryEdgeFieldDetails
      AggregateStory: AggregateStoryFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      UserSubscriptionPayload: UserSubscriptionPayloadFieldDetails
      UserPreviousValues: UserPreviousValuesFieldDetails
      StorySubscriptionPayload: StorySubscriptionPayloadFieldDetails
      StoryPreviousValues: StoryPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      UserWhereUniqueInput: UserWhereUniqueInputInputObject
      StoryWhereInput: StoryWhereInputInputObject
      UserWhereInput: UserWhereInputInputObject
      StoryWhereUniqueInput: StoryWhereUniqueInputInputObject
      UserCreateInput: UserCreateInputInputObject
      StoryCreateManyWithoutAuthorInput: StoryCreateManyWithoutAuthorInputInputObject
      StoryCreateWithoutAuthorInput: StoryCreateWithoutAuthorInputInputObject
      UserUpdateInput: UserUpdateInputInputObject
      StoryUpdateManyWithoutAuthorInput: StoryUpdateManyWithoutAuthorInputInputObject
      StoryUpdateWithWhereUniqueWithoutAuthorInput: StoryUpdateWithWhereUniqueWithoutAuthorInputInputObject
      StoryUpdateWithoutAuthorDataInput: StoryUpdateWithoutAuthorDataInputInputObject
      StoryUpsertWithWhereUniqueWithoutAuthorInput: StoryUpsertWithWhereUniqueWithoutAuthorInputInputObject
      StoryScalarWhereInput: StoryScalarWhereInputInputObject
      StoryUpdateManyWithWhereNestedInput: StoryUpdateManyWithWhereNestedInputInputObject
      StoryUpdateManyDataInput: StoryUpdateManyDataInputInputObject
      StoryCreateInput: StoryCreateInputInputObject
      UserCreateOneWithoutStoriesInput: UserCreateOneWithoutStoriesInputInputObject
      StoryUpdateInput: StoryUpdateInputInputObject
      UserUpdateOneWithoutStoriesInput: UserUpdateOneWithoutStoriesInputInputObject
      StoryUpdateManyMutationInput: StoryUpdateManyMutationInputInputObject
      UserSubscriptionWhereInput: UserSubscriptionWhereInputInputObject
      StorySubscriptionWhereInput: StorySubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    StoryOrderByInput: StoryOrderByInputValues,
    UserOrderByInput: UserOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'user', args?: QueryUserArgs[] | false, alias?: string  } 
  | { name: 'users', args?: QueryUsersArgs[] | false, alias?: string  } 
  | { name: 'usersConnection', args?: QueryUsersConnectionArgs[] | false, alias?: string  } 
  | { name: 'story', args?: QueryStoryArgs[] | false, alias?: string  } 
  | { name: 'stories', args?: QueryStoriesArgs[] | false, alias?: string  } 
  | { name: 'storiesConnection', args?: QueryStoriesConnectionArgs[] | false, alias?: string  } 
  | { name: 'node', args?: QueryNodeArgs[] | false, alias?: string  } 

type QueryFields =
  | 'user'
  | 'users'
  | 'usersConnection'
  | 'story'
  | 'stories'
  | 'storiesConnection'
  | 'node'


type QueryUserArgs =
  | 'where'
type QueryUsersArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryUsersConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryStoryArgs =
  | 'where'
type QueryStoriesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryStoriesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryNodeArgs =
  | 'id'
  

export interface QueryFieldDetails {
  user: {
    type: 'User'
    args: Record<QueryUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  users: {
    type: 'User'
    args: Record<QueryUsersArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User[]> | prisma.User[]
  }
  usersConnection: {
    type: 'UserConnection'
    args: Record<QueryUsersConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: UserWhereInput | null, orderBy?: prisma.UserOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserConnection> | prisma.UserConnection
  }
  story: {
    type: 'Story'
    args: Record<QueryStoryArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: StoryWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Story | null> | prisma.Story | null
  }
  stories: {
    type: 'Story'
    args: Record<QueryStoriesArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: StoryWhereInput | null, orderBy?: prisma.StoryOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Story[]> | prisma.Story[]
  }
  storiesConnection: {
    type: 'StoryConnection'
    args: Record<QueryStoriesConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: StoryWhereInput | null, orderBy?: prisma.StoryOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StoryConnection> | prisma.StoryConnection
  }
  node: {
    type: 'Node'
    args: Record<QueryNodeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { id: string }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Node | null> | prisma.Node | null
  }
}
  

// Types for User

type UserObject =
  | UserFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'stories', args?: UserStoriesArgs[] | false, alias?: string  } 

type UserFields =
  | 'id'
  | 'stories'


type UserStoriesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface UserFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  stories: {
    type: 'Story'
    args: Record<UserStoriesArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"User">,
      args: { where?: StoryWhereInput | null, orderBy?: prisma.StoryOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Story[]> | prisma.Story[]
  }
}
  

// Types for Story

type StoryObject =
  | StoryFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'text', args?: [] | false, alias?: string  } 
  | { name: 'author', args?: [] | false, alias?: string  } 

type StoryFields =
  | 'id'
  | 'text'
  | 'author'



  

export interface StoryFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  text: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  author: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Story">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
}
  

// Types for UserConnection

type UserConnectionObject =
  | UserConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type UserConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface UserConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'UserEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserEdge[]> | prisma.UserEdge[]
  }
  aggregate: {
    type: 'AggregateUser'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateUser> | prisma.AggregateUser
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for UserEdge

type UserEdgeObject =
  | UserEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type UserEdgeFields =
  | 'node'
  | 'cursor'



  

export interface UserEdgeFieldDetails {
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateUser

type AggregateUserObject =
  | AggregateUserFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateUserFields =
  | 'count'



  

export interface AggregateUserFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for StoryConnection

type StoryConnectionObject =
  | StoryConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type StoryConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface StoryConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StoryConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'StoryEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"StoryConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StoryEdge[]> | prisma.StoryEdge[]
  }
  aggregate: {
    type: 'AggregateStory'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StoryConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateStory> | prisma.AggregateStory
  }
}
  

// Types for StoryEdge

type StoryEdgeObject =
  | StoryEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type StoryEdgeFields =
  | 'node'
  | 'cursor'



  

export interface StoryEdgeFieldDetails {
  node: {
    type: 'Story'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StoryEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Story> | prisma.Story
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateStory

type AggregateStoryObject =
  | AggregateStoryFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateStoryFields =
  | 'count'



  

export interface AggregateStoryFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createUser', args?: MutationCreateUserArgs[] | false, alias?: string  } 
  | { name: 'updateUser', args?: MutationUpdateUserArgs[] | false, alias?: string  } 
  | { name: 'upsertUser', args?: MutationUpsertUserArgs[] | false, alias?: string  } 
  | { name: 'deleteUser', args?: MutationDeleteUserArgs[] | false, alias?: string  } 
  | { name: 'deleteManyUsers', args?: MutationDeleteManyUsersArgs[] | false, alias?: string  } 
  | { name: 'createStory', args?: MutationCreateStoryArgs[] | false, alias?: string  } 
  | { name: 'updateStory', args?: MutationUpdateStoryArgs[] | false, alias?: string  } 
  | { name: 'updateManyStories', args?: MutationUpdateManyStoriesArgs[] | false, alias?: string  } 
  | { name: 'upsertStory', args?: MutationUpsertStoryArgs[] | false, alias?: string  } 
  | { name: 'deleteStory', args?: MutationDeleteStoryArgs[] | false, alias?: string  } 
  | { name: 'deleteManyStories', args?: MutationDeleteManyStoriesArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createUser'
  | 'updateUser'
  | 'upsertUser'
  | 'deleteUser'
  | 'deleteManyUsers'
  | 'createStory'
  | 'updateStory'
  | 'updateManyStories'
  | 'upsertStory'
  | 'deleteStory'
  | 'deleteManyStories'


type MutationCreateUserArgs =
  | 'data'
type MutationUpdateUserArgs =
  | 'data'
  | 'where'
type MutationUpsertUserArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteUserArgs =
  | 'where'
type MutationDeleteManyUsersArgs =
  | 'where'
type MutationCreateStoryArgs =
  | 'data'
type MutationUpdateStoryArgs =
  | 'data'
  | 'where'
type MutationUpdateManyStoriesArgs =
  | 'data'
  | 'where'
type MutationUpsertStoryArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteStoryArgs =
  | 'where'
type MutationDeleteManyStoriesArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createUser: {
    type: 'User'
    args: Record<MutationCreateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  updateUser: {
    type: 'User'
    args: Record<MutationUpdateUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: UserUpdateInput, where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  upsertUser: {
    type: 'User'
    args: Record<MutationUpsertUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User> | prisma.User
  }
  deleteUser: {
    type: 'User'
    args: Record<MutationDeleteUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: UserWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  deleteManyUsers: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyUsersArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: UserWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createStory: {
    type: 'Story'
    args: Record<MutationCreateStoryArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: StoryCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Story> | prisma.Story
  }
  updateStory: {
    type: 'Story'
    args: Record<MutationUpdateStoryArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: StoryUpdateInput, where: StoryWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Story | null> | prisma.Story | null
  }
  updateManyStories: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyStoriesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: StoryUpdateManyMutationInput, where?: StoryWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertStory: {
    type: 'Story'
    args: Record<MutationUpsertStoryArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: StoryWhereUniqueInput, create: StoryCreateInput, update: StoryUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Story> | prisma.Story
  }
  deleteStory: {
    type: 'Story'
    args: Record<MutationDeleteStoryArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: StoryWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Story | null> | prisma.Story | null
  }
  deleteManyStories: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyStoriesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: StoryWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'user', args?: SubscriptionUserArgs[] | false, alias?: string  } 
  | { name: 'story', args?: SubscriptionStoryArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'user'
  | 'story'


type SubscriptionUserArgs =
  | 'where'
type SubscriptionStoryArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  user: {
    type: 'UserSubscriptionPayload'
    args: Record<SubscriptionUserArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: UserSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserSubscriptionPayload | null> | prisma.UserSubscriptionPayload | null
  }
  story: {
    type: 'StorySubscriptionPayload'
    args: Record<SubscriptionStoryArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: StorySubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StorySubscriptionPayload | null> | prisma.StorySubscriptionPayload | null
  }
}
  

// Types for UserSubscriptionPayload

type UserSubscriptionPayloadObject =
  | UserSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type UserSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface UserSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'User'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.User | null> | prisma.User | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'UserPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"UserSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.UserPreviousValues | null> | prisma.UserPreviousValues | null
  }
}
  

// Types for UserPreviousValues

type UserPreviousValuesObject =
  | UserPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 

type UserPreviousValuesFields =
  | 'id'



  

export interface UserPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for StorySubscriptionPayload

type StorySubscriptionPayloadObject =
  | StorySubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type StorySubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface StorySubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"StorySubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Story'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"StorySubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Story | null> | prisma.Story | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'StoryPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"StorySubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.StoryPreviousValues | null> | prisma.StoryPreviousValues | null
  }
}
  

// Types for StoryPreviousValues

type StoryPreviousValuesObject =
  | StoryPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'text', args?: [] | false, alias?: string  } 

type StoryPreviousValuesFields =
  | 'id'
  | 'text'



  

export interface StoryPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  text: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  


export interface UserWhereUniqueInput {
  id?: string | null
}
export type UserWhereUniqueInputInputObject =
  | Extract<keyof UserWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface StoryWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  text?: string | null
  text_not?: string | null
  text_in?: string[]
  text_not_in?: string[]
  text_lt?: string | null
  text_lte?: string | null
  text_gt?: string | null
  text_gte?: string | null
  text_contains?: string | null
  text_not_contains?: string | null
  text_starts_with?: string | null
  text_not_starts_with?: string | null
  text_ends_with?: string | null
  text_not_ends_with?: string | null
  author?: UserWhereInput | null
  AND?: StoryWhereInput[]
  OR?: StoryWhereInput[]
  NOT?: StoryWhereInput[]
}
export type StoryWhereInputInputObject =
  | Extract<keyof StoryWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'text', alias?: string  } 
  | { name: 'text_not', alias?: string  } 
  | { name: 'text_in', alias?: string  } 
  | { name: 'text_not_in', alias?: string  } 
  | { name: 'text_lt', alias?: string  } 
  | { name: 'text_lte', alias?: string  } 
  | { name: 'text_gt', alias?: string  } 
  | { name: 'text_gte', alias?: string  } 
  | { name: 'text_contains', alias?: string  } 
  | { name: 'text_not_contains', alias?: string  } 
  | { name: 'text_starts_with', alias?: string  } 
  | { name: 'text_not_starts_with', alias?: string  } 
  | { name: 'text_ends_with', alias?: string  } 
  | { name: 'text_not_ends_with', alias?: string  } 
  | { name: 'author', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface UserWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  stories_every?: StoryWhereInput | null
  stories_some?: StoryWhereInput | null
  stories_none?: StoryWhereInput | null
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
}
export type UserWhereInputInputObject =
  | Extract<keyof UserWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'stories_every', alias?: string  } 
  | { name: 'stories_some', alias?: string  } 
  | { name: 'stories_none', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface StoryWhereUniqueInput {
  id?: string | null
}
export type StoryWhereUniqueInputInputObject =
  | Extract<keyof StoryWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface UserCreateInput {
  stories?: StoryCreateManyWithoutAuthorInput | null
}
export type UserCreateInputInputObject =
  | Extract<keyof UserCreateInput, string>
  | { name: 'stories', alias?: string  } 
  
export interface StoryCreateManyWithoutAuthorInput {
  create?: StoryCreateWithoutAuthorInput[]
  connect?: StoryWhereUniqueInput[]
}
export type StoryCreateManyWithoutAuthorInputInputObject =
  | Extract<keyof StoryCreateManyWithoutAuthorInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface StoryCreateWithoutAuthorInput {
  text?: string
}
export type StoryCreateWithoutAuthorInputInputObject =
  | Extract<keyof StoryCreateWithoutAuthorInput, string>
  | { name: 'text', alias?: string  } 
  
export interface UserUpdateInput {
  stories?: StoryUpdateManyWithoutAuthorInput | null
}
export type UserUpdateInputInputObject =
  | Extract<keyof UserUpdateInput, string>
  | { name: 'stories', alias?: string  } 
  
export interface StoryUpdateManyWithoutAuthorInput {
  create?: StoryCreateWithoutAuthorInput[]
  delete?: StoryWhereUniqueInput[]
  connect?: StoryWhereUniqueInput[]
  set?: StoryWhereUniqueInput[]
  disconnect?: StoryWhereUniqueInput[]
  update?: StoryUpdateWithWhereUniqueWithoutAuthorInput[]
  upsert?: StoryUpsertWithWhereUniqueWithoutAuthorInput[]
  deleteMany?: StoryScalarWhereInput[]
  updateMany?: StoryUpdateManyWithWhereNestedInput[]
}
export type StoryUpdateManyWithoutAuthorInputInputObject =
  | Extract<keyof StoryUpdateManyWithoutAuthorInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface StoryUpdateWithWhereUniqueWithoutAuthorInput {
  where?: StoryWhereUniqueInput
  data?: StoryUpdateWithoutAuthorDataInput
}
export type StoryUpdateWithWhereUniqueWithoutAuthorInputInputObject =
  | Extract<keyof StoryUpdateWithWhereUniqueWithoutAuthorInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface StoryUpdateWithoutAuthorDataInput {
  text?: string | null
}
export type StoryUpdateWithoutAuthorDataInputInputObject =
  | Extract<keyof StoryUpdateWithoutAuthorDataInput, string>
  | { name: 'text', alias?: string  } 
  
export interface StoryUpsertWithWhereUniqueWithoutAuthorInput {
  where?: StoryWhereUniqueInput
  update?: StoryUpdateWithoutAuthorDataInput
  create?: StoryCreateWithoutAuthorInput
}
export type StoryUpsertWithWhereUniqueWithoutAuthorInputInputObject =
  | Extract<keyof StoryUpsertWithWhereUniqueWithoutAuthorInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface StoryScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  text?: string | null
  text_not?: string | null
  text_in?: string[]
  text_not_in?: string[]
  text_lt?: string | null
  text_lte?: string | null
  text_gt?: string | null
  text_gte?: string | null
  text_contains?: string | null
  text_not_contains?: string | null
  text_starts_with?: string | null
  text_not_starts_with?: string | null
  text_ends_with?: string | null
  text_not_ends_with?: string | null
  AND?: StoryScalarWhereInput[]
  OR?: StoryScalarWhereInput[]
  NOT?: StoryScalarWhereInput[]
}
export type StoryScalarWhereInputInputObject =
  | Extract<keyof StoryScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'text', alias?: string  } 
  | { name: 'text_not', alias?: string  } 
  | { name: 'text_in', alias?: string  } 
  | { name: 'text_not_in', alias?: string  } 
  | { name: 'text_lt', alias?: string  } 
  | { name: 'text_lte', alias?: string  } 
  | { name: 'text_gt', alias?: string  } 
  | { name: 'text_gte', alias?: string  } 
  | { name: 'text_contains', alias?: string  } 
  | { name: 'text_not_contains', alias?: string  } 
  | { name: 'text_starts_with', alias?: string  } 
  | { name: 'text_not_starts_with', alias?: string  } 
  | { name: 'text_ends_with', alias?: string  } 
  | { name: 'text_not_ends_with', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface StoryUpdateManyWithWhereNestedInput {
  where?: StoryScalarWhereInput
  data?: StoryUpdateManyDataInput
}
export type StoryUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof StoryUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface StoryUpdateManyDataInput {
  text?: string | null
}
export type StoryUpdateManyDataInputInputObject =
  | Extract<keyof StoryUpdateManyDataInput, string>
  | { name: 'text', alias?: string  } 
  
export interface StoryCreateInput {
  text?: string
  author?: UserCreateOneWithoutStoriesInput | null
}
export type StoryCreateInputInputObject =
  | Extract<keyof StoryCreateInput, string>
  | { name: 'text', alias?: string  } 
  | { name: 'author', alias?: string  } 
  
export interface UserCreateOneWithoutStoriesInput {
  connect?: UserWhereUniqueInput | null
}
export type UserCreateOneWithoutStoriesInputInputObject =
  | Extract<keyof UserCreateOneWithoutStoriesInput, string>
  | { name: 'connect', alias?: string  } 
  
export interface StoryUpdateInput {
  text?: string | null
  author?: UserUpdateOneWithoutStoriesInput | null
}
export type StoryUpdateInputInputObject =
  | Extract<keyof StoryUpdateInput, string>
  | { name: 'text', alias?: string  } 
  | { name: 'author', alias?: string  } 
  
export interface UserUpdateOneWithoutStoriesInput {
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: UserWhereUniqueInput | null
}
export type UserUpdateOneWithoutStoriesInputInputObject =
  | Extract<keyof UserUpdateOneWithoutStoriesInput, string>
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface StoryUpdateManyMutationInput {
  text?: string | null
}
export type StoryUpdateManyMutationInputInputObject =
  | Extract<keyof StoryUpdateManyMutationInput, string>
  | { name: 'text', alias?: string  } 
  
export interface UserSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: UserWhereInput | null
  AND?: UserSubscriptionWhereInput[]
  OR?: UserSubscriptionWhereInput[]
  NOT?: UserSubscriptionWhereInput[]
}
export type UserSubscriptionWhereInputInputObject =
  | Extract<keyof UserSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface StorySubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: StoryWhereInput | null
  AND?: StorySubscriptionWhereInput[]
  OR?: StorySubscriptionWhereInput[]
  NOT?: StorySubscriptionWhereInput[]
}
export type StorySubscriptionWhereInputInputObject =
  | Extract<keyof StorySubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type StoryOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'text_ASC'
  | 'text_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type UserOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  