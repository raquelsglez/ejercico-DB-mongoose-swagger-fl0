module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Tasks: "Create a task",
          },
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task successfully created",
              content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Task",                          
                    },
                },
            },
            },
            500: {
              description: "There was a problem trying to create a task",
            },
          },
        }
      },

      "/": {
        get: {
          tags: {
            Tasks: "Get all tasks",
          },
          description: "Get all Tasks",
          operationId: "getAllTasks",
          parameters: [],
          requestBody: {},
          responses: {
            200: {
                content: {
                    "application/json": {
                        schema: {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/Task",
                            }
                        },
                    },
                },
            },
            500: {
              description: "Server error",
            },
          },
        }
      },

      "/id/{_id}": {
        put: {
          tags: {
            Tasks: "Update task",
          },
          description: "Update a Task",
          operationId: "updateTask",
          parameters: [
            {
                name: "_id",
                in: "path",
                schema: {
                  $ref: "#/components/schemas/_id",
                },
                description: "Id of Task to be obtained",
              },
    
          ],
          requestBody: {
            content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/UpdateTask" },
                },
              },    
          },
          responses: {
            200: {
                description: "task successfully updated",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Task",                          
                        },
                    },
                },
            },
            500: {
              description: "Server error",
            },
          },
        },
        delete: {
            tags: {
              Tasks: "Delete task",
            },
            description: "Delete a Task",
            operationId: "deleteTask",
            parameters: [
              {
                  name: "_id",
                  in: "path",
                  schema: {
                    $ref: "#/components/schemas/_id",
                  },
                  description: "Id of Task to be deleted",
                },
      
            ],
            requestBody: {},
            responses: {
              200: {
                  description: "task deleted",
                  content: {
                      "application/json": {
                          schema: {
                              $ref: "#/components/schemas/Task",                          
                          },
                      },
                  },
              },
              500: {
                description: "There was a problem trying to delete a task",
              },
            },
          }
      },
    },
}
  