module.exports = {
    40000: {
        status: 400,
        msg: '用户名密码错误',
    },
    40001: {
        status: 401,
        msg: '请登录后重试',
        error: '用户没有登录'
    },
    40002: {
        status: 400,
        msg: '上传文件类型有误'
    },
    50001: {
        status: 500,
        msg: '上传文件失败',
        error: '上传文件时创建目录失败'
    }
};