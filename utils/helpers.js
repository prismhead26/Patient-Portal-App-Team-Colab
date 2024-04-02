const dayjs = require('dayjs')
var localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)

module.exports = { 
    stringifyData: (data) => {
        return JSON.stringify(data);
    },
    formatDate: (data) => {
        return dayjs(data).format('LLLL');
    },
}
