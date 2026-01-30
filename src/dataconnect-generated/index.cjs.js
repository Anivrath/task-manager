const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'task-manager',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateProject', inputVars);
}
createProjectRef.operationName = 'CreateProject';
exports.createProjectRef = createProjectRef;

exports.createProject = function createProject(dcOrVars, vars) {
  return executeMutation(createProjectRef(dcOrVars, vars));
};

const listTasksForProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListTasksForProject', inputVars);
}
listTasksForProjectRef.operationName = 'ListTasksForProject';
exports.listTasksForProjectRef = listTasksForProjectRef;

exports.listTasksForProject = function listTasksForProject(dcOrVars, vars) {
  return executeQuery(listTasksForProjectRef(dcOrVars, vars));
};

const addUserToProjectRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddUserToProject', inputVars);
}
addUserToProjectRef.operationName = 'AddUserToProject';
exports.addUserToProjectRef = addUserToProjectRef;

exports.addUserToProject = function addUserToProject(dcOrVars, vars) {
  return executeMutation(addUserToProjectRef(dcOrVars, vars));
};

const createCommentRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateComment', inputVars);
}
createCommentRef.operationName = 'CreateComment';
exports.createCommentRef = createCommentRef;

exports.createComment = function createComment(dcOrVars, vars) {
  return executeMutation(createCommentRef(dcOrVars, vars));
};
