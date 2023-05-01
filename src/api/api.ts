import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "d8ddbbfd-73b3-4c97-83fb-b21eaa65f146"
    }

})
export type loginDataType = {
    email: string
    password: string
    rememberMe: boolean
}
export const usersApi = {
    login(formData: loginDataType) {
        return instance.post('auth/login', formData)
    },
    logout() {
        return instance.delete('auth/login')
    },
    getUsers(usersPerPage: number, p: number) {
        return instance.get(`users?page=${p}&count=${usersPerPage}`)
            .then(response => {
                return response.data
            })
    },
    // (usersPerPage: number) {
    //     return instance.get(`users?count=${usersPerPage}`)
    //         .then(response => {
    //             return response.data
    //         })
    // },
    // getCurrentPage(p: number, usersPerPage: number) {
    //     return instance.get(`users?page=${p}&count=${usersPerPage}`)
    //         .then(response => {
    //             return response.data
    //         })
    // },
    getUsersPerPage(currentPage: number, e: number) {
        return instance.get(`users?page=${currentPage}&count=${e}`)
            .then(response => {
                return response.data
            })
    },
    getMyAuthData() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    getMyProfileData(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getMyProfileStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    changeMyProfileStatus(status: string) {
        return instance.put('profile/status', {status})
    },
    unfollowButton(uId: number) {
        return instance.delete(`follow/${uId}`)
    },
    followButton(uId: number) {
        return instance.post(`follow/${uId}`)
    }

}