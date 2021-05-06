const mongoose=require('mongoose');
// const url=process.env.MONGO || "mongodb://localhost:27017/Questionsystem";
const url=process.env.MONGO || "mongodb+srv://nidhi:nidhi123@passportlogin.2wcok.mongodb.net/Questionsystem";
mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
    
},(err)=>{
    if(!err)
    {
        console.log("mongodb connected");
    }    
    else
    {
        console.log(err);
    }
});