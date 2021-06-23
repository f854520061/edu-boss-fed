const protectPhone = function (phone) {
    // 判断是否为手机号
    const reg = /\d{11}/g
    if (!reg.test(phone)) return phone
    const reg1 = /^(\d{3})\d{4}(\d{4})$/
    phone = phone.toString().replace(reg1, '$1****$2')
    return phone
}

const protectPhone = function (phone) {
    // 判断是否为手机号
    const reg = /\d{11}/g
    if (!reg.test(phone)) return phone
    const ar = phone.toString().split('')
    ar.splice(3, 4, '****')
    return ar.join('')
}

const protectPhone = function () {

}

function protectPhone () {
    const reg = /\d{11}/g
    if (reg.test(phone)) {
        const ar = phone.split()
        return ar.join('')
    }
}

async function log () {
    console.log(1)
    await sleep(1000)
    console.log(2)
}

log()

function sleep (time) {
    let timer = null
    return new Promise((resolve, reject) => {
        timer = setTimeout(resolve, time)
    }).then(() => {
        clearTimeout(timer)
    })
}
