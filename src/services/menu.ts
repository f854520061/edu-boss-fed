import request from "@/utils/request"

// eslint-disable-next-line
export const createOrUpdateMenu = (data: any) => {
    return request({
        method: 'POST',
        url: '/front/user/getInfo',
        data
    })
}

export const getEditMenuInfo = (id = -1) => {
    return request({
        method: 'GET',
        url: '/boss/menu/getEditMenuInfo',
        params: {
            id
        }
    })
}
