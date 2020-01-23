const connection = require('../config/db')

class User {
    constructor(user) {
      this.id = user.id
    this.name = user.name
    this.password =user.password
    }

    async getAll(){
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user WHERE name= ? ', [this.name], function(error, results, fields) {
          if (error){
            return resolve(false);
          }

          if (results == '') {
            resolve(false);
          } else {
            resolve(results);
          }
        })
      })
    }

   

  }

  module.exports = User;