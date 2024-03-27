const express=require("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json());
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');


const mongoUrl = "mongodb+srv://bquintero02:jA61o%5Ee3%25z@atlascluster.zxkgm5g.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";
const JWT_SECRET= "hdvay6ert72839289()aiyg8t87qt72393293883uehfiuh78ttq3if[]we";
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
    collection:"userDetail"
});
const User=mongoose.model("userDetail", UserInfoSchema);

// Schema for journalEntries collection
const JournalInfoSchema = new mongoose.Schema({
    _id:String,
    date:String,
    entry:String,
},{
    collection:"journalEntries"
});
const Journal=mongoose.model("journalEntries", JournalInfoSchema);

app.get("/", (req, res)=>{
    res.send({status:"Started"})
});

// API name is register
app.post('/register', async(req,res)=>{
    const {id, password}= req.body;
    const oldUser = await User.findOne({_id:id});
    

// If user's ID is already registered, the user already exists
if (oldUser) {
    return res.send({data: "User already exists!"});
}
// Hash user's password for security
const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        // Otherwise, create user in userInfo collection with schema
        await User.create({
            _id:id,
            pass:encryptedPassword,
        });
        res.send({status:"ok",data:"User Created"});
    } catch(error) {
        res.send({status:"error", data: error});
    }
})

// API name is login
app.post('/login', async(req, res) => {
    const {id, password} = req.body;
    const oldUser= await User.findOne({_id:id}) 

    // If user tries to login to an unregistered ID, user doesn't exist
    if (!oldUser) {
        return res.send({data:"User doesn't exist"})
    }

    // User password must match a registered password in database
    if (await bcrypt.compare(password, oldUser.pass)) {
        /// Create unique token everytime user signs in with username
        const token = jwt.sign({_id:oldUser.id}, JWT_SECRET);
    
   // 201 = successful
    if (res.status(201)) {
        return res.send({status:"ok", data:token})
    }
    else {
        return res.send({error: "error"});
    }
    }

})

app.post('/userdata', async(req, res) => {
    const {token} = req.body;
    try {
        // If token matches, we can get user data
        const user = jwt.verify(token, JWT_SECRET)
        const userName = user.id;

        User.findOne({_id:userName}).then(data => {
            return res.send({status:"ok", data: data})
        })
    } catch(error) {
        return res.send({ërror: error})
    }
})
// API name is journal
app.post('/journal', async(req,res)=>{
    const {id, date, entry}= req.body;
    try {
        // Create journal in journalEntries collection with schema
        await Journal.create({
            _id:id,
            date:date,
            entry:entry,
        });
        res.send({status:"ok",data:"Entry Created"});
    } catch(error) {
        res.send({status:"error", data: error});
    }
});

app.listen(8001, ()=>{
    console.log("Node js server started.");
});

