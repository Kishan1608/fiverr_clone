import User from '../models/user.model.js'
import createError from '../utils/createError.js';

export const deleteUser = async(req, res, next) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(401).send("User not found!");
    
    if(req.userId !== user._id.toString()){
        return next(createError(403, "Your can only delete your account"));
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("Deleted");
}  

export const getUser = async(req, res, next) => {
    const user = await User.findById(req.params.id);
    
    res.status(200).send(user);
}  