module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"name from task",
                        example:"Hacer los deberes"
                    },
                    completed:{
                        type:'boolean',
                        description:"task status",
                        example:"true"
                    }
                }
            },
            _id:{
                type:'objectId',
                description:"An id of a task",
                example: "6201064b0028de7866e2b2c4"
            },
            UpdateTask:{
                type:'object',
                properties:{
                    title:{
                        type:'string',
                        description:"name from task",
                        example:"Hacer los deberes"
                    },
                }
            },
        }
    }
}
