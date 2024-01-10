//1.try,catch
try{
let lastName="kai"
let fullName=firstName +''+lastName
}catch(error){
console.log(error)
}
//2.try,catch,finally
try{
    let firstName="loye"
    let fullName=firstName +''+lastName
    }catch(error){
    console.log(error)
    }finally{
    console.log("I will must execute ")
    }
try{
    let firstName="loye"
    let fullName=firstName +''+lastName
    }catch(error){
    console.log('Name of the error',error.name)
    console.log('Error message',error.message)
    }finally{
    console.log("I will must execute ")
    }
//3.throw
let pretentJson='{ "name":"josh" ,"age":30}'
try{
    let data=JSON.parse(pretentJson)
    if(!data.name){
        throw new SyntaxError("Incomplete data:no name")
    }
    console.log(data.name)
    }catch(error){
    console.log('json error: '+ error)
    }
    //referenceError
    // let s=2 x 2
    // console.log(s)
