const express=require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const UserRoutes = require('./Routes/UserRoutes')
const AdminRoutes = require('./Routes/AdminRoutes')


const app = express();
const cookieparser =require('cookie-parser')


app.listen(4000,()=>{
    console.log("server started");
});
mongoose.connect('mongodb://127.0.0.1:27017/incubation',{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log(('DB Connected'));
}).catch(err=>{
    console.log(err.message);
});

app.use(cors({
    origin:['http://localhost:3000'],
    method:['GET',"POST","PUT","PATCH"],
    credentials:true
}));


app.use(cookieparser());
app.use(express.json());
app.use('/',UserRoutes);
app.use('/admin',AdminRoutes);
