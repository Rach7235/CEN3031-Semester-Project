const express=require("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json());

const mongoUrl = "mongodb+srv://bquintero02:jA61o%5Ee3%25z@atlascluster.zxkgm5g.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
mongoose.connect(mongoUrl).then(()=>{
    console.log("Database Connected");
})
.catch((e)=>{
    console.log(e);
});

// Schema for userInfo collection
const UserInfoSchema = new mongoose.Schema({
    _id:String,
    pass:String,
},{
    collection:"userInfo"
});
const User=mongoose.model("UserInfo", UserInfoSchema);
app.get("/", (req, res)=>{
    res.send({status:"Started"})
});

app.post('/register', async(req,res)=>{
    const {name, password}=req.body;
    const oldUser = await User.findOne({name:name});

// If user's ID is already registered, the user already exists
if (oldUser) {
    return res.send({data: "User already exists!"});
}
    try {
        // Otherwise, create user in userInfo collection with schema
        await User.create({
            _id:name,
            pass:password,
        });
        res.send({status:"ok",data:"User Created"});
    } catch(error) {
        res.send({status:"error", data: error});
    }
})

app.listen(8001, ()=>{
    console.log("Node js server started.");
});

