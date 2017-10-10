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
    return queryInterface.bulkInsert('activityType', [
  {
    id: 1,
    activityName: 'Warm up'
  },
  {
    id: 2,
    activityName: 'Drills/Scales'
  },
  {
    id: 3,
    activityName: 'Drills/Scales in context'
  },
  {
    id: 4,
    activityName: 'Learn new piece'
  },
  {
    id: 5,
    activityName: 'Focus on challenging section'
  },
  {
    id: 6,
    activityName: 'Play section at slower tempo'
  },
  {
    id: 7,
    activityName: 'Phrasing'
  },
  {
    id: 8,
    activityName: 'Run through repertoire'
  },
  {
    id: 9,
    activityName: 'Learn new theory and apply it'
  },
  {
    id: 10,
    activityName: 'Break'
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
