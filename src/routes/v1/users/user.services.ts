import { IUser } from "./types"
import userRepository from "./user.repository"

const userServices = {
    async createUser(userData: IUser) {
        const existingUser = await userRepository.findUserByUsernameOrEmail(userData.username, userData.email)
        console.log(existingUser)
        if (existingUser){
           throw new Error("user already exists.")
        }
        return userRepository.createNewUser(userData)
    },

    async getAllUser() {
        return userRepository.getAllUser();
    },

    async getUserById(userId: string) {
        return userRepository.findUserById(userId)
    },
    
    async getUserByUsername(username: string) {
        return userRepository.findUserByUsername(username)
    },

    async getUserByEmail(email: string) {
        return userRepository.findUserByEmail(email)
    },

    async updateUser(_id: string, newData: IUser){
        // return userRepository
    }
}

export default userServices