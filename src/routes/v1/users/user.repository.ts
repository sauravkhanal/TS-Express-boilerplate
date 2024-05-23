import UserModel, { IUserDocument } from "../../../models/userModel";
import { IUser } from "./types";

const userRepository = {
    async getAllUsers(): Promise<IUserDocument[] | null> {
        return UserModel.find().select({ "password": false });
    },

    async findUserByEmail(email: string): Promise<IUserDocument | null> {
        return UserModel.findOne({ email }).select({ "password": false });
    },

    async findUserById(_id: string): Promise<IUserDocument | null> {
        return UserModel.findById({ _id }).select({ "password": false });
    },

    async findUserByUsername(username: string): Promise<IUserDocument | null> {
        return UserModel.findOne({ username }).select({ "password": false });
    },

    async findUserByUsernameOrEmail(username: string, email: string): Promise<IUserDocument | null> {
        return UserModel.findOne({ $or: [{ username }, { email }] }).select({ "password": false });
    },

    async findUserByData(userData?: Partial<IUser>): Promise<IUserDocument | null> {
        return UserModel.findOne(userData).select({ "password": false });
    },

    async createNewUser(userData: IUser): Promise<IUserDocument> {
        const newUser = new UserModel(userData);
        return newUser.save()
    },

    async updateUserData(_id: string, newData?: IUser): Promise<IUserDocument | null> {
        return UserModel.findOneAndUpdate({ _id }, { ...newData }, { new: true }).select({ "password": false });
    },

    async deleteUser(_id: string): Promise<IUserDocument | null> {
        return UserModel.findOneAndUpdate({ _id }, { deleted: true, deactivated: true }, { new: true }).select({ "password": false });
    },

    async recoverUser(_id: string): Promise<IUserDocument | null> {
        return UserModel.findOneAndUpdate({ _id }, { deleted: false }, { new: true }).select({ "password": false });
    },

    async deactivateUser(_id: string): Promise<IUserDocument | null> {
        return UserModel.findOneAndUpdate({ _id }, { deactivated: true }, { new: true }).select({ "password": false });
    },

    async reactivateUser(_id: string): Promise<IUserDocument | null> {
        return UserModel.findOneAndUpdate({ _id }, { deactivated: false }, { new: true }).select({ "password": false });
    },

}

export default userRepository;