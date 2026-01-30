import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AddUserToProjectData {
  projectMembership_insert: ProjectMembership_Key;
}

export interface AddUserToProjectVariables {
  projectId: UUIDString;
  userId: UUIDString;
  role: string;
}

export interface Comment_Key {
  id: UUIDString;
  __typename?: 'Comment_Key';
}

export interface CreateCommentData {
  comment_insert: Comment_Key;
}

export interface CreateCommentVariables {
  taskId: UUIDString;
  content: string;
}

export interface CreateProjectData {
  project_insert: Project_Key;
}

export interface CreateProjectVariables {
  name: string;
  description?: string | null;
  dueDate?: DateString | null;
  status: string;
}

export interface ListTasksForProjectData {
  tasks: ({
    id: UUIDString;
    title: string;
    description?: string | null;
    dueDate?: DateString | null;
    status: string;
    assignee?: {
      id: UUIDString;
      username: string;
    } & User_Key;
  } & Task_Key)[];
}

export interface ListTasksForProjectVariables {
  projectId: UUIDString;
}

export interface ProjectMembership_Key {
  userId: UUIDString;
  projectId: UUIDString;
  __typename?: 'ProjectMembership_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Task_Key {
  id: UUIDString;
  __typename?: 'Task_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProjectVariables): MutationRef<CreateProjectData, CreateProjectVariables>;
  operationName: string;
}
export const createProjectRef: CreateProjectRef;

export function createProject(vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;
export function createProject(dc: DataConnect, vars: CreateProjectVariables): MutationPromise<CreateProjectData, CreateProjectVariables>;

interface ListTasksForProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: ListTasksForProjectVariables): QueryRef<ListTasksForProjectData, ListTasksForProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: ListTasksForProjectVariables): QueryRef<ListTasksForProjectData, ListTasksForProjectVariables>;
  operationName: string;
}
export const listTasksForProjectRef: ListTasksForProjectRef;

export function listTasksForProject(vars: ListTasksForProjectVariables): QueryPromise<ListTasksForProjectData, ListTasksForProjectVariables>;
export function listTasksForProject(dc: DataConnect, vars: ListTasksForProjectVariables): QueryPromise<ListTasksForProjectData, ListTasksForProjectVariables>;

interface AddUserToProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddUserToProjectVariables): MutationRef<AddUserToProjectData, AddUserToProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddUserToProjectVariables): MutationRef<AddUserToProjectData, AddUserToProjectVariables>;
  operationName: string;
}
export const addUserToProjectRef: AddUserToProjectRef;

export function addUserToProject(vars: AddUserToProjectVariables): MutationPromise<AddUserToProjectData, AddUserToProjectVariables>;
export function addUserToProject(dc: DataConnect, vars: AddUserToProjectVariables): MutationPromise<AddUserToProjectData, AddUserToProjectVariables>;

interface CreateCommentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateCommentVariables): MutationRef<CreateCommentData, CreateCommentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateCommentVariables): MutationRef<CreateCommentData, CreateCommentVariables>;
  operationName: string;
}
export const createCommentRef: CreateCommentRef;

export function createComment(vars: CreateCommentVariables): MutationPromise<CreateCommentData, CreateCommentVariables>;
export function createComment(dc: DataConnect, vars: CreateCommentVariables): MutationPromise<CreateCommentData, CreateCommentVariables>;

