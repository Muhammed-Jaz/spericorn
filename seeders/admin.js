// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//     let pswd = 'admin'
//     const salt = await bcryptjs.genSalt(10);
//     const hash = await bcryptjs.hash(pswd, salt);
//     return await queryInterface.bulkInsert('user', [{
//       name: 'admin',
//       email: "admin@123.com",
//       password: hash,
//       role: 1
//     }], {})
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//     return await queryInterface.bulkDelete('user', [{
//       email: 'admin@123.com'
//     }], {});
//   }
// };
'use strict'
const { db } = require('../models');

; (async () => {
  try {
    let pswd = 'admin'
    const salt = await bcryptjs.genSalt(10);
    const hash = await bcryptjs.hash(pswd, salt);
    let user = {
      name: 'admin',
      email: "admin@123.com",
      password: hash,
      role: 1
    }
    await db.user.create(user)
    console.log('admin seeded succesfully')

    process.exit(0)
  } catch (e) {
    console.log(e);
    throw Error(e)
  }
})()