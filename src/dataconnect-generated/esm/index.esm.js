import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'task-manager',
  location: 'us-east4'
};

export const createProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateProject', inputVars);
}
createProjectRef.operationName = 'CreateProject';

export function createProject(dcOrVars, vars) {
  return executeMutation(createProjectRef(dcOrVars, vars));
}

export const listTasksForProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTasksForProject', inputVars);
}
listTasksForProjectRef.operationName = 'ListTasksForProject';

export function listTasksForProject(dcOrVars, vars) {
  return executeQuery(listTasksForProjectRef(dcOrVars, vars));
}

export const addUserToProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddUserToProject', inputVars);
}
addUserToProjectRef.operationName = 'AddUserToProject';

export function addUserToProject(dcOrVars, vars) {
  return executeMutation(addUserToProjectRef(dcOrVars, vars));
}

export const createCommentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateComment', inputVars);
}
createCommentRef.operationName = 'CreateComment';

export function createComment(dcOrVars, vars) {
  return executeMutation(createCommentRef(dcOrVars, vars));
}

