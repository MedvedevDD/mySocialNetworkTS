import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "d8ddbbfd-73b3-4c97-83fb-b21eaa65f146"
    }

})

export const usersApi = {
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
    unfollowButton(uId: number) {
        return instance.delete(`follow/${uId}`)
    },
    followButton(uId: number) {
        return instance.post(`follow/${uId}`)
    }

}