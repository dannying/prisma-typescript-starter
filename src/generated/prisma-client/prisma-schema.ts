export const typeDefs = /* GraphQL */ `type AggregateStory {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createStory(data: StoryCreateInput!): Story!
  updateStory(data: StoryUpdateInput!, where: StoryWhereUniqueInput!): Story
  updateManyStories(data: StoryUpdateManyMutationInput!, where: StoryWhereInput): BatchPayload!
  upsertStory(where: StoryWhereUniqueInput!, create: StoryCreateInput!, update: StoryUpdateInput!): Story!
  deleteStory(where: StoryWhereUniqueInput!): Story
  deleteManyStories(where: StoryWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  story(where: StoryWhereUniqueInput!): Story
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story]!
  storiesConnection(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StoryConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Story {
  id: ID!
  text: String!
  author: User
}

type StoryConnection {
  pageInfo: PageInfo!
  edges: [StoryEdge]!
  aggregate: AggregateStory!
}

input StoryCreateInput {
  text: String!
  author: UserCreateOneWithoutStoriesInput
}

input StoryCreateManyWithoutAuthorInput {
  create: [StoryCreateWithoutAuthorInput!]
  connect: [StoryWhereUniqueInput!]
}

input StoryCreateWithoutAuthorInput {
  text: String!
}

type StoryEdge {
  node: Story!
  cursor: String!
}

enum StoryOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StoryPreviousValues {
  id: ID!
  text: String!
}

input StoryScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [StoryScalarWhereInput!]
  OR: [StoryScalarWhereInput!]
  NOT: [StoryScalarWhereInput!]
}

type StorySubscriptionPayload {
  mutation: MutationType!
  node: Story
  updatedFields: [String!]
  previousValues: StoryPreviousValues
}

input StorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StoryWhereInput
  AND: [StorySubscriptionWhereInput!]
  OR: [StorySubscriptionWhereInput!]
  NOT: [StorySubscriptionWhereInput!]
}

input StoryUpdateInput {
  text: String
  author: UserUpdateOneWithoutStoriesInput
}

input StoryUpdateManyDataInput {
  text: String
}

input StoryUpdateManyMutationInput {
  text: String
}

input StoryUpdateManyWithoutAuthorInput {
  create: [StoryCreateWithoutAuthorInput!]
  delete: [StoryWhereUniqueInput!]
  connect: [StoryWhereUniqueInput!]
  set: [StoryWhereUniqueInput!]
  disconnect: [StoryWhereUniqueInput!]
  update: [StoryUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [StoryUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [StoryScalarWhereInput!]
  updateMany: [StoryUpdateManyWithWhereNestedInput!]
}

input StoryUpdateManyWithWhereNestedInput {
  where: StoryScalarWhereInput!
  data: StoryUpdateManyDataInput!
}

input StoryUpdateWithoutAuthorDataInput {
  text: String
}

input StoryUpdateWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput!
  data: StoryUpdateWithoutAuthorDataInput!
}

input StoryUpsertWithWhereUniqueWithoutAuthorInput {
  where: StoryWhereUniqueInput!
  update: StoryUpdateWithoutAuthorDataInput!
  create: StoryCreateWithoutAuthorInput!
}

input StoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  author: UserWhereInput
  AND: [StoryWhereInput!]
  OR: [StoryWhereInput!]
  NOT: [StoryWhereInput!]
}

input StoryWhereUniqueInput {
  id: ID
}

type Subscription {
  story(where: StorySubscriptionWhereInput): StorySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  stories(where: StoryWhereInput, orderBy: StoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Story!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  stories: StoryCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutStoriesInput {
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  stories: StoryUpdateManyWithoutAuthorInput
}

input UserUpdateOneWithoutStoriesInput {
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  stories_every: StoryWhereInput
  stories_some: StoryWhereInput
  stories_none: StoryWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`