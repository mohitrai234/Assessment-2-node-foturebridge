const { sendSuccessResponse, sendErrorResponse } = require('../Common/Common');
const userModel = require('../Model/userModel')
module.exports = {
    createUserController: async (req, res) => {
        const addUser = new userModel(req.body)
        try {
            await addUser.save();
            res.send(sendSuccessResponse(200, "User Added Successfully", addUser))
        } catch (error) {
            res.send(sendErrorResponse(400, "Unable to add User", {}))
        }
    },
    udateUserController: async (req, res) => {
        const { id } = req.params
        try {
            await userModel.findByIdAndUpdate(id, req.body)
            const updateUser = await userModel.findById(id)
            res.send(sendSuccessResponse(200, "User Updated Successfully", updateUser))
        } catch (error) {
            res.send(sendErrorResponse(400, "Unable to Update User", {}))
        }
    },
    getUserController: async (req, res) => {
        const users = await userModel.find({})
        res.send(sendSuccessResponse(200, "User Fetched Successfully", users))
    },
    deleteUserController: async (req, res) => {
        const { id } = req.params
        try {
            await userModel.findByIdAndDelete(id)
            res.send(sendSuccessResponse(200, "User Deleted Successfully", {}))
        } catch (error) {
            res.send(sendErrorResponse(400, "Unable to Delete User", {}))
        }
    }
}