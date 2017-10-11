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
    return queryInterface.bulkInsert('harmonicElements', [
  {
    id: 1,
    name: 'C',
    description: '',
    notes: 'C4 E4 G4',
    easyScore: '(C4 E4 G4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    name: 'Cmaj7',
    description: '',
    notes: 'C4 E4 G4 B4',
    easyScore: '(C4 E4 G4 B4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    name: 'C7',
    description: '',
    notes: 'C4 E4 G4 Bb4',
    easyScore: '(C4 E4 G4 Bb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 4,
    name: 'Cm',
    description: '',
    notes: 'C4 Eb4 G4',
    easyScore: '(C4 Eb4 G4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 5,
    name: 'Cmin7',
    description: '',
    notes: 'C4 Eb4 G4 Bb4',
    easyScore: '(C4 Eb4 G4 Bb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 6,
    name: 'Cdim',
    description: '',
    notes: 'C4 Eb4 Gb4',
    easyScore: '(C4 Eb4 Gb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 7,
    name: 'Cm7b5',
    description: '',
    notes: 'C4 Eb4 Gb4 Bb4',
    easyScore: '(C4 Eb4 Gb4 Bb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 8,
    name: 'Cdim7',
    description: '',
    notes: 'C4 Eb4 Gb4 Bbb4',
    easyScore: '(C4 Eb4 Gb4 Bbb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 9,
    name: 'Caug',
    description: '',
    notes: 'C4 E4 G#4',
    easyScore: '(C4 E4 G#4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 10,
    name: 'G',
    description: '',
    notes: 'G4 B4 D5',
    easyScore: '(G4 B4 D5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 11,
    name: 'Gmaj7',
    description: '',
    notes: 'G4 B4 D5 F#5',
    easyScore: '(G4 B4 D5 F#5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 12,
    name: 'G7',
    description: '',
    notes: 'G4 B4 D5 F5',
    easyScore: '(G4 B4 D5 F5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 13,
    name: 'Gm',
    description: '',
    notes: 'G4 Bb4 D5',
    easyScore: '(G4 Bb4 D5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 14,
    name: 'Gmin7',
    description: '',
    notes: 'G4 Bb4 D5 F5',
    easyScore: '(G4 Bb4 D5 F5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 15,
    name: 'Gdim',
    description: '',
    notes: 'G4 Bb4 Db5',
    easyScore: '(G4 Bb4 Db5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 16,
    name: 'Gm7b5',
    description: '',
    notes: 'G4 Bb4 Db5 F5',
    easyScore: '(G4 Bb4 Db5 F5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 17,
    name: 'Gdim7',
    description: '',
    notes: 'G4 Bb4 Db5 Fb5',
    easyScore: '(G4 Bb4 Db5 Fb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 18,
    name: 'Gaug',
    description: '',
    notes: 'G4 B4 D#5',
    easyScore: '(G4 B4 D#5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 19,
    name: 'D',
    description: '',
    notes: 'D4 F#4 A4',
    easyScore: '(D4 F#4 A4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 20,
    name: 'Dmaj7',
    description: '',
    notes: 'D4 F#4 A4 C#5',
    easyScore: '(D4 F#4 A4 C#5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 21,
    name: 'D7',
    description: '',
    notes: 'D4 F#4 A4 C5',
    easyScore: '(D4 F#4 A4 C5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 22,
    name: 'Dm',
    description: '',
    notes: 'D4 F4 A4',
    easyScore: '(D4 F4 A4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 23,
    name: 'Dmin7',
    description: '',
    notes: 'D4 F4 A4 C5',
    easyScore: '(D4 F4 A4 C5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 24,
    name: 'Ddim',
    description: '',
    notes: 'D4 F4 Ab4',
    easyScore: '(D4 F4 Ab4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 25,
    name: 'Dm7b5',
    description: '',
    notes: 'D4 F4 Ab4 C5',
    easyScore: '(D4 F4 Ab4 C5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 26,
    name: 'Ddim7',
    description: '',
    notes: 'D4 F4 Ab4 Cb5',
    easyScore: '(D4 F4 Ab4 Cb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 27,
    name: 'Daug',
    description: '',
    notes: 'D4 F#4 A#4',
    easyScore: '(D4 F#4 A#4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 28,
    name: 'A',
    description: '',
    notes: 'A4 C#5 E5',
    easyScore: '(A4 C#5 E5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 29,
    name: 'Amaj7',
    description: '',
    notes: 'A4 C#5 E5 G#5',
    easyScore: '(A4 C#5 E5 G#5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 30,
    name: 'A7',
    description: '',
    notes: 'A4 C#5 E5 G5',
    easyScore: '(A4 C#5 E5 G5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 31,
    name: 'Am',
    description: '',
    notes: 'A4 C5 E5',
    easyScore: '(A4 C5 E5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 32,
    name: 'Amin7',
    description: '',
    notes: 'A4 C5 E5 G5',
    easyScore: '(A4 C5 E5 G5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 33,
    name: 'Adim',
    description: '',
    notes: 'A4 C5 Eb5',
    easyScore: '(A4 C5 Eb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 34,
    name: 'Am7b5',
    description: '',
    notes: 'A4 C5 Eb5 G5',
    easyScore: '(A4 C5 Eb5 G5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 35,
    name: 'Adim7',
    description: '',
    notes: 'A4 C5 Eb5 Gb5',
    easyScore: '(A4 C5 Eb5 Gb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 36,
    name: 'Aaug',
    description: '',
    notes: 'A4 C#5 E#5',
    easyScore: '(A4 C#5 E#5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 37,
    name: 'E',
    description: '',
    notes: 'E4 G#4 B4',
    easyScore: '(E4 G#4 B4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 38,
    name: 'Emaj7',
    description: '',
    notes: 'E4 G#4 B4 D#5',
    easyScore: '(E4 G#4 B4 D#5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 39,
    name: 'E7',
    description: '',
    notes: 'E4 G#4 B4 D5',
    easyScore: '(E4 G#4 B4 D5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 40,
    name: 'Em',
    description: '',
    notes: 'E4 G4 B4',
    easyScore: '(E4 G4 B4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 41,
    name: 'Emin7',
    description: '',
    notes: 'E4 G4 B4 D5',
    easyScore: '(E4 G4 B4 D5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 42,
    name: 'Edim',
    description: '',
    notes: 'E4 G4 Bb4',
    easyScore: '(E4 G4 Bb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 43,
    name: 'Em7b5',
    description: '',
    notes: 'E4 G4 Bb4 D5',
    easyScore: '(E4 G4 Bb4 D5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 44,
    name: 'Edim7',
    description: '',
    notes: 'E4 G4 Bb4 Db5',
    easyScore: '(E4 G4 Bb4 Db5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 45,
    name: 'Eaug',
    description: '',
    notes: 'E4 G#4 B#4',
    easyScore: '(E4 G#4 B#4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 46,
    name: 'F',
    description: '',
    notes: 'F4 A4 C5',
    easyScore: '(F4 A4 C5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 47,
    name: 'Fmaj7',
    description: '',
    notes: 'F4 A4 C5 E5',
    easyScore: '(F4 A4 C5 E5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 48,
    name: 'F7',
    description: '',
    notes: 'F4 A4 C5 Eb5',
    easyScore: '(F4 A4 C5 Eb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 49,
    name: 'Fm',
    description: '',
    notes: 'F4 Ab4 C5',
    easyScore: '(F4 Ab4 C5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 50,
    name: 'Fmin7',
    description: '',
    notes: 'F4 Ab4 C5 Eb5',
    easyScore: '(F4 Ab4 C5 Eb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 51,
    name: 'Fdim',
    description: '',
    notes: 'F4 Ab4 Cb5',
    easyScore: '(F4 Ab4 Cb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 52,
    name: 'Fm7b5',
    description: '',
    notes: 'F4 Ab4 Cb5 Eb5',
    easyScore: '(F4 Ab4 Cb5 Eb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 53,
    name: 'Fdim7',
    description: '',
    notes: 'F4 Ab4 Cb5 Ebb5',
    easyScore: '(F4 Ab4 Cb5 Ebb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 54,
    name: 'Faug',
    description: '',
    notes: 'F4 A4 C#5',
    easyScore: '(F4 A4 C#5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 55,
    name: 'Bb',
    description: '',
    notes: 'Bb3 D4 F4',
    easyScore: '(Bb3 D4 F4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 56,
    name: 'Bbmaj7',
    description: '',
    notes: 'Bb3 D4 F4 A4',
    easyScore: '(Bb3 D4 F4 A4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 57,
    name: 'Bb7',
    description: '',
    notes: 'Bb3 D4 F4 Ab4',
    easyScore: '(Bb3 D4 F4 Ab4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 58,
    name: 'Bbm',
    description: '',
    notes: 'Bb3 Db4 F4',
    easyScore: '(Bb3 Db4 F4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 59,
    name: 'Bbmin7',
    description: '',
    notes: 'Bb3 Db4 F4 Ab4',
    easyScore: '(Bb3 Db4 F4 Ab4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 60,
    name: 'Bbdim',
    description: '',
    notes: 'Bb3 Db4 Fb4',
    easyScore: '(Bb3 Db4 Fb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 61,
    name: 'Bbm7b5',
    description: '',
    notes: 'Bb3 Db4 Fb4 Ab4',
    easyScore: '(Bb3 Db4 Fb4 Ab4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 62,
    name: 'Bbdim7',
    description: '',
    notes: 'Bb3 Db4 Fb4 Abb4',
    easyScore: '(Bb3 Db4 Fb4 Abb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 63,
    name: 'Bbaug',
    description: '',
    notes: 'Bb3 D4 F#4',
    easyScore: '(Bb3 D4 F#4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 64,
    name: 'Eb',
    description: '',
    notes: 'Eb4 G4 Bb54',
    easyScore: '(Eb4 G4 Bb54)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 65,
    name: 'Ebmaj7',
    description: '',
    notes: 'Eb4 G4 Bb4 D4',
    easyScore: '(Eb4 G4 Bb4 D4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 66,
    name: 'Eb7',
    description: '',
    notes: 'Eb4 G4 Bb4 Db5',
    easyScore: '(Eb4 G4 Bb4 Db5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 67,
    name: 'Ebm',
    description: '',
    notes: 'Eb4 Gb4 Bb4',
    easyScore: '(Eb4 Gb4 Bb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 68,
    name: 'Ebmin7',
    description: '',
    notes: 'Eb4 Gb4 Bb4 Db5',
    easyScore: '(Eb4 Gb4 Bb4 Db5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 69,
    name: 'Ebdim',
    description: '',
    notes: 'Eb4 Gb4 Bbb4',
    easyScore: '(Eb4 Gb4 Bbb4)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 70,
    name: 'Ebm7b5',
    description: '',
    notes: 'Eb4 Gb4 Bbb4 Db5',
    easyScore: '(Eb4 Gb4 Bbb4 Db5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 71,
    name: 'Ebdim7',
    description: '',
    notes: 'Eb4 Gb4 Bbb4 Dbb5',
    easyScore: '(Eb4 Gb4 Bbb4 Dbb5)/w',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 72,
    name: 'Ebaug',
    description: '',
    notes: 'Eb4 G4 B4',
    easyScore: '(Eb4 G4 B4)/w',
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
