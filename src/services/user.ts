import qs from 'qs'
import request from "@/utils/request"

interface User {
    phone: string
    password: string
}

export const login = (data: User) => {
    return request({
        method: 'POST',
        url: '/front/user/login',
        data: qs.stringify(data) // axios 默认发送的是 application/json 格式的数据
        // headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
}

export const getUserInfo = () => {
    return request({
        method: 'GET',
        url: '/front/user/getInfo'
    })
}
