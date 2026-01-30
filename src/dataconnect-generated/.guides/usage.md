# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createProject, listTasksForProject, addUserToProject, createComment } from '@dataconnect/generated';


// Operation CreateProject:  For variables, look at type CreateProjectVars in ../index.d.ts
const { data } = await CreateProject(dataConnect, createProjectVars);

// Operation ListTasksForProject:  For variables, look at type ListTasksForProjectVars in ../index.d.ts
const { data } = await ListTasksForProject(dataConnect, listTasksForProjectVars);

// Operation AddUserToProject:  For variables, look at type AddUserToProjectVars in ../index.d.ts
const { data } = await AddUserToProject(dataConnect, addUserToProjectVars);

// Operation CreateComment:  For variables, look at type CreateCommentVars in ../index.d.ts
const { data } = await CreateComment(dataConnect, createCommentVars);


```