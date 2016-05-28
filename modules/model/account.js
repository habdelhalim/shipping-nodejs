var db = require('../db/connection.js')

function Account() {
    this.account_id = ''
    this.carrier_code = ''
    this.account_no = ''
    this.username = ''
    this.password = ''
    this.entity = ''
    this.pin = ''
    this.country = ''
    this.service_group = ''
    this.version = ''
    this.description = ''
    this.create_date = ''
    this.update_date = ''
}

function findAccount(id, callback) {
    db.query('select * from account where account_id = ?', [id], callback)
}

module.exports = {Account: Account, find: findAccount}
