import UserModel, { IUserDocument } from "../../../models/userModel";
import { IUser } from "./types";

const userRepository = {
    async getAllUser(): Promise<IUserDocument[] | null> {
        return UserModel.find().select({ "password": false });
    },

    async findUserByEmail(email: string): Promise<IUserDocument | null> {
        return UserModel.findOne({ email }).select({ "password": false });
    },

    async findUserById(_id: string): Promise<IUserDocument | null> {
        return UserModel.findById({ _id }).select({ "password": false });
    },

    async findUserByUsername(_id: string): Promise<IUserDocument | null> {
        return UserModel.findById({ _id }).select({ "password": false });
    },

    async findUserByUsernameOrEmail(username: string, email: string): Promise<IUserDocument | null> {
        return UserModel.findOne({ $or: [{ username }, { email }] }).select({ "password": false });
    },

    async createNewUser(userData: IUser): Promise<IUserDocument> {
        const newUser = new UserModel(userData);
        return newUser.save()
    },

    // async updateUserData(_id: string, userData: IUser): Promise<IUserDocument | null> {
    //     return UserModel.updateOne({_id}, {$set: [{userData}]})
    // },
}

export default userRepository;