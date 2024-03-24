import UserModel from "../models/User.model.mjs";

class UserController {
    
    // HomePage
    static Home = async (req, res) => {
        const option = {
            title: "HomePage"
        }
        try {
            res.render('index', { option })
        } catch (error) {
            console.log(error, "Home page rendering error!");
        }
    }

    // Registration
    static Registration = async (req, res) => {
        const option = {
            title: "Registration Page"
        };
        try {
            res.render('registration', { option });
        } catch (error) {
            console.log(error, "Registration page rendering error!");
        }
    }

    // Login
    static Login = async (req, res) => {
        const option = {
            title: "Login Page"
        };
        try {
            res.render('login', { option });
        } catch (error) {
            console.log(error, "Login page rendering error!");
        }
    }
    // here document creating post method at route /registration
    static CreateDoc = async (req,res)=>{
        
        const {unames,uemail,upwd} = req.body;
        
        console.log(unames,uemail,upwd);
        const UserDoc = new UserModel({
            name:unames,
            email:uemail,
            password:upwd
        });

        try {
            const data = await UserDoc.save();
            console.log(data);
            res.redirect('login');
        } catch (error) {
            console.log(error,"createDoc error!");
        }
    }

    static Login = async (req, res) => {
        const email =  req.param.email;
        try {
            const data = await UserModel.findOne({ email: "smitt533@gmail.com" });
            if (data) { // Check if data is not null
                res.send('<h1>Home page</h1>');
            } else {
                // Handle case when user is not found
                res.send('<h1>User not found</h1>');
            }
        } catch (error) {
            console.log(error, "login error");
            res.status(500).send('<h1>Error</h1>');
        }
    }
    

}



export default UserController;