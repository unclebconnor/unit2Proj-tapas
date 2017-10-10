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
    name: 'C',
    description: '',
    notes: 'C4 E4 G4',
    easyScore: '(C4 E4 G4)/w'
  },
  {
    name: 'Cmaj7',
    description: '',
    notes: 'C4 E4 G4 B4',
    easyScore: '(C4 E4 G4 B4)/w'
  },
  {
    name: 'C7',
    description: '',
    notes: 'C4 E4 G4 Bb4',
    easyScore: '(C4 E4 G4 Bb4)/w'
  },
  {
    name: 'Cm',
    description: '',
    notes: 'C4 Eb4 G4',
    easyScore: '(C4 Eb4 G4)/w'
  },
  {
    name: 'Cmin7',
    description: '',
    notes: 'C4 Eb4 G4 Bb4',
    easyScore: '(C4 Eb4 G4 Bb4)/w'
  },
  {
    name: 'Cdim',
    description: '',
    notes: 'C4 Eb4 Gb4',
    easyScore: '(C4 Eb4 Gb4)/w'
  },
  {
    name: 'Cm7b5',
    description: '',
    notes: 'C4 Eb4 Gb4 Bb4',
    easyScore: '(C4 Eb4 Gb4 Bb4)/w'
  },
  {
    name: 'Cdim7',
    description: '',
    notes: 'C4 Eb4 Gb4 Bbb4',
    easyScore: '(C4 Eb4 Gb4 Bbb4)/w'
  },
  {
    name: 'Caug',
    description: '',
    notes: 'C4 E4 G#4',
    easyScore: '(C4 E4 G#4)/w'
  },
  {
    name: 'G',
    description: '',
    notes: 'G4 B4 D5',
    easyScore: '(G4 B4 D5)/w'
  },
  {
    name: 'Gmaj7',
    description: '',
    notes: 'G4 B4 D5 F#5',
    easyScore: '(G4 B4 D5 F#5)/w'
  },
  {
    name: 'G7',
    description: '',
    notes: 'G4 B4 D5 F5',
    easyScore: '(G4 B4 D5 F5)/w'
  },
  {
    name: 'Gm',
    description: '',
    notes: 'G4 Bb4 D5',
    easyScore: '(G4 Bb4 D5)/w'
  },
  {
    name: 'Gmin7',
    description: '',
    notes: 'G4 Bb4 D5 F5',
    easyScore: '(G4 Bb4 D5 F5)/w'
  },
  {
    name: 'Gdim',
    description: '',
    notes: 'G4 Bb4 Db5',
    easyScore: '(G4 Bb4 Db5)/w'
  },
  {
    name: 'Gm7b5',
    description: '',
    notes: 'G4 Bb4 Db5 F5',
    easyScore: '(G4 Bb4 Db5 F5)/w'
  },
  {
    name: 'Gdim7',
    description: '',
    notes: 'G4 Bb4 Db5 Fb5',
    easyScore: '(G4 Bb4 Db5 Fb5)/w'
  },
  {
    name: 'Gaug',
    description: '',
    notes: 'G4 B4 D#5',
    easyScore: '(G4 B4 D#5)/w'
  },
  {
    name: 'D',
    description: '',
    notes: 'D4 F#4 A4',
    easyScore: '(D4 F#4 A4)/w'
  },
  {
    name: 'Dmaj7',
    description: '',
    notes: 'D4 F#4 A4 C#5',
    easyScore: '(D4 F#4 A4 C#5)/w'
  },
  {
    name: 'D7',
    description: '',
    notes: 'D4 F#4 A4 C5',
    easyScore: '(D4 F#4 A4 C5)/w'
  },
  {
    name: 'Dm',
    description: '',
    notes: 'D4 F4 A4',
    easyScore: '(D4 F4 A4)/w'
  },
  {
    name: 'Dmin7',
    description: '',
    notes: 'D4 F4 A4 C5',
    easyScore: '(D4 F4 A4 C5)/w'
  },
  {
    name: 'Ddim',
    description: '',
    notes: 'D4 F4 Ab4',
    easyScore: '(D4 F4 Ab4)/w'
  },
  {
    name: 'Dm7b5',
    description: '',
    notes: 'D4 F4 Ab4 C5',
    easyScore: '(D4 F4 Ab4 C5)/w'
  },
  {
    name: 'Ddim7',
    description: '',
    notes: 'D4 F4 Ab4 Cb5',
    easyScore: '(D4 F4 Ab4 Cb5)/w'
  },
  {
    name: 'Daug',
    description: '',
    notes: 'D4 F#4 A#4',
    easyScore: '(D4 F#4 A#4)/w'
  },
  {
    name: 'A',
    description: '',
    notes: 'A4 C#5 E5',
    easyScore: '(A4 C#5 E5)/w'
  },
  {
    name: 'Amaj7',
    description: '',
    notes: 'A4 C#5 E5 G#5',
    easyScore: '(A4 C#5 E5 G#5)/w'
  },
  {
    name: 'A7',
    description: '',
    notes: 'A4 C#5 E5 G5',
    easyScore: '(A4 C#5 E5 G5)/w'
  },
  {
    name: 'Am',
    description: '',
    notes: 'A4 C5 E5',
    easyScore: '(A4 C5 E5)/w'
  },
  {
    name: 'Amin7',
    description: '',
    notes: 'A4 C5 E5 G5',
    easyScore: '(A4 C5 E5 G5)/w'
  },
  {
    name: 'Adim',
    description: '',
    notes: 'A4 C5 Eb5',
    easyScore: '(A4 C5 Eb5)/w'
  },
  {
    name: 'Am7b5',
    description: '',
    notes: 'A4 C5 Eb5 G5',
    easyScore: '(A4 C5 Eb5 G5)/w'
  },
  {
    name: 'Adim7',
    description: '',
    notes: 'A4 C5 Eb5 Gb5',
    easyScore: '(A4 C5 Eb5 Gb5)/w'
  },
  {
    name: 'Aaug',
    description: '',
    notes: 'A4 C#5 E#5',
    easyScore: '(A4 C#5 E#5)/w'
  },
  {
    name: 'E',
    description: '',
    notes: 'E4 G#4 B4',
    easyScore: '(E4 G#4 B4)/w'
  },
  {
    name: 'Emaj7',
    description: '',
    notes: 'E4 G#4 B4 D#5',
    easyScore: '(E4 G#4 B4 D#5)/w'
  },
  {
    name: 'E7',
    description: '',
    notes: 'E4 G#4 B4 D5',
    easyScore: '(E4 G#4 B4 D5)/w'
  },
  {
    name: 'Em',
    description: '',
    notes: 'E4 G4 B4',
    easyScore: '(E4 G4 B4)/w'
  },
  {
    name: 'Emin7',
    description: '',
    notes: 'E4 G4 B4 D5',
    easyScore: '(E4 G4 B4 D5)/w'
  },
  {
    name: 'Edim',
    description: '',
    notes: 'E4 G4 Bb4',
    easyScore: '(E4 G4 Bb4)/w'
  },
  {
    name: 'Em7b5',
    description: '',
    notes: 'E4 G4 Bb4 D5',
    easyScore: '(E4 G4 Bb4 D5)/w'
  },
  {
    name: 'Edim7',
    description: '',
    notes: 'E4 G4 Bb4 Db5',
    easyScore: '(E4 G4 Bb4 Db5)/w'
  },
  {
    name: 'Eaug',
    description: '',
    notes: 'E4 G#4 B#4',
    easyScore: '(E4 G#4 B#4)/w'
  },
  {
    name: 'F',
    description: '',
    notes: 'F4 A4 C5',
    easyScore: '(F4 A4 C5)/w'
  },
  {
    name: 'Fmaj7',
    description: '',
    notes: 'F4 A4 C5 E5',
    easyScore: '(F4 A4 C5 E5)/w'
  },
  {
    name: 'F7',
    description: '',
    notes: 'F4 A4 C5 Eb5',
    easyScore: '(F4 A4 C5 Eb5)/w'
  },
  {
    name: 'Fm',
    description: '',
    notes: 'F4 Ab4 C5',
    easyScore: '(F4 Ab4 C5)/w'
  },
  {
    name: 'Fmin7',
    description: '',
    notes: 'F4 Ab4 C5 Eb5',
    easyScore: '(F4 Ab4 C5 Eb5)/w'
  },
  {
    name: 'Fdim',
    description: '',
    notes: 'F4 Ab4 Cb5',
    easyScore: '(F4 Ab4 Cb5)/w'
  },
  {
    name: 'Fm7b5',
    description: '',
    notes: 'F4 Ab4 Cb5 Eb5',
    easyScore: '(F4 Ab4 Cb5 Eb5)/w'
  },
  {
    name: 'Fdim7',
    description: '',
    notes: 'F4 Ab4 Cb5 Ebb5',
    easyScore: '(F4 Ab4 Cb5 Ebb5)/w'
  },
  {
    name: 'Faug',
    description: '',
    notes: 'F4 A4 C#5',
    easyScore: '(F4 A4 C#5)/w'
  },
  {
    name: 'Bb',
    description: '',
    notes: 'Bb3 D4 F4',
    easyScore: '(Bb3 D4 F4)/w'
  },
  {
    name: 'Bbmaj7',
    description: '',
    notes: 'Bb3 D4 F4 A4',
    easyScore: '(Bb3 D4 F4 A4)/w'
  },
  {
    name: 'Bb7',
    description: '',
    notes: 'Bb3 D4 F4 Ab4',
    easyScore: '(Bb3 D4 F4 Ab4)/w'
  },
  {
    name: 'Bbm',
    description: '',
    notes: 'Bb3 Db4 F4',
    easyScore: '(Bb3 Db4 F4)/w'
  },
  {
    name: 'Bbmin7',
    description: '',
    notes: 'Bb3 Db4 F4 Ab4',
    easyScore: '(Bb3 Db4 F4 Ab4)/w'
  },
  {
    name: 'Bbdim',
    description: '',
    notes: 'Bb3 Db4 Fb4',
    easyScore: '(Bb3 Db4 Fb4)/w'
  },
  {
    name: 'Bbm7b5',
    description: '',
    notes: 'Bb3 Db4 Fb4 Ab4',
    easyScore: '(Bb3 Db4 Fb4 Ab4)/w'
  },
  {
    name: 'Bbdim7',
    description: '',
    notes: 'Bb3 Db4 Fb4 Abb4',
    easyScore: '(Bb3 Db4 Fb4 Abb4)/w'
  },
  {
    name: 'Bbaug',
    description: '',
    notes: 'Bb3 D4 F#4',
    easyScore: '(Bb3 D4 F#4)/w'
  },
  {
    name: 'Eb',
    description: '',
    notes: 'Eb4 G4 Bb54',
    easyScore: '(Eb4 G4 Bb54)/w'
  },
  {
    name: 'Ebmaj7',
    description: '',
    notes: 'Eb4 G4 Bb4 D4',
    easyScore: '(Eb4 G4 Bb4 D4)/w'
  },
  {
    name: 'Eb7',
    description: '',
    notes: 'Eb4 G4 Bb4 Db5',
    easyScore: '(Eb4 G4 Bb4 Db5)/w'
  },
  {
    name: 'Ebm',
    description: '',
    notes: 'Eb4 Gb4 Bb4',
    easyScore: '(Eb4 Gb4 Bb4)/w'
  },
  {
    name: 'Ebmin7',
    description: '',
    notes: 'Eb4 Gb4 Bb4 Db5',
    easyScore: '(Eb4 Gb4 Bb4 Db5)/w'
  },
  {
    name: 'Ebdim',
    description: '',
    notes: 'Eb4 Gb4 Bbb4',
    easyScore: '(Eb4 Gb4 Bbb4)/w'
  },
  {
    name: 'Ebm7b5',
    description: '',
    notes: 'Eb4 Gb4 Bbb4 Db5',
    easyScore: '(Eb4 Gb4 Bbb4 Db5)/w'
  },
  {
    name: 'Ebdim7',
    description: '',
    notes: 'Eb4 Gb4 Bbb4 Dbb5',
    easyScore: '(Eb4 Gb4 Bbb4 Dbb5)/w'
  },
  {
    name: 'Ebaug',
    description: '',
    notes: 'Eb4 G4 B4',
    easyScore: '(Eb4 G4 B4)/w'
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
