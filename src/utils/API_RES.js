class ApiResp{
    constructor(statudCode ,data ,message = "Success"){
        this.statudCode = statudCode 
        this.data = data
        this.message = message
        this.success = statudCode<400
    
    }
}