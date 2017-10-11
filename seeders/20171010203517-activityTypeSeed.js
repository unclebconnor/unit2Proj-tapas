'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('activityTypes', [
  {
    id: 1,
    activityName: 'Warm up',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    activityName: 'Drills/Scales',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    activityName: 'Drills/Scales in context',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    activityName: 'Learn new piece',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    activityName: 'Focus on challenging section',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    activityName: 'Play section at slower tempo',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    activityName: 'Phrasing',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 8,
    activityName: 'Run through repertoire',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 9,
    activityName: 'Learn new theory and apply it',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 10,
    activityName: 'Break',
    detail: '',
    createdAt: new Date(),
    updatedAt: new Date()
  }
], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
