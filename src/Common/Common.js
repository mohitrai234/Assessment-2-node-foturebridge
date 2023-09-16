module.exports = {
    sendSuccessResponse: function (status, message, data) {
        return {
            status: status || 200,
            message: message || "",
            data: data || {}
        }
    },
    sendErrorResponse: function (status, message, data) {
        return {
            status: status || 400,
            message: message || "",
            data: data || {}
        }
    }
}