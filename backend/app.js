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

const UserDetailSchema = new mongoose.Schema({
    name:String,
    password:String,
    entries:Array,
},{
    collection:"Users"
});
const User=mongoose.model("Users", UserDetailSchema);
app.get("/", (req, res)=>{
    res.send({status:"Started"})
});

app.post('/register', async(req,res)=>{
    const {name, password, entries}=req.body;
    const oldUser = await User.findOne({name:name});

// If user's full name is already registered, the user already exists
if (oldUser) {
    return res.send({data: "User already exists!"});
}
    try {
        // Create user in mongoDb database with schema
        await User.create({
            name:name,
            password:password,
            entries:entries,
        });
        res.send({status:"ok",data:"User Created"});
    } catch(error) {
        res.send({status:"error", data: error});
    }
})

app.listen(8001, ()=>{
    console.log("Node js server started.");
});

