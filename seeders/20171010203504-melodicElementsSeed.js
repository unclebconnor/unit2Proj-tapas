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
    return queryInterface.bulkInsert('melodicElements', [
  {
    name: 'C arp',
    description: '',
    notesDur: 'C4/8,E4,G4,C5,E5,G5,E5,C5',
    notes: 'C4,E4,G4,C5,G5,E5,C5',
    firstFour: 'C4,E4,G4,C5',
    secondFour: 'E5,G5,E5,C5',
    firstFourDur: 'C4/8,E4,G4,C5'
  },
  {
    name: 'Cmaj7 arp',
    description: '',
    notesDur: 'C4/8,E4,G4,B4,C5,E5,G5,B5',
    notes: 'C4,E4,G4,B4,E5,G5,B5',
    firstFour: 'C4,E4,G4,B4',
    secondFour: 'C5,E5,G5,B5',
    firstFourDur: 'C4/8,E4,G4,B4'
  },
  {
    name: 'Cmaj scl',
    description: '',
    notesDur: 'C4/8,D4,E4,F4,G4,A4,B4,C5',
    notes: 'C4,D4,E4,F4,A4,B4,C5',
    firstFour: 'C4,D4,E4,F4',
    secondFour: 'G4,A4,B4,C5',
    firstFourDur: 'C4/8,D4,E4,F4'
  },
  {
    name: 'Cmaj pent',
    description: '',
    notesDur: 'C4/8,D4,E4,G4,A4,G4,E4,D4',
    notes: 'C4,D4,E4,G4,A4,G4,E4,D4',
    firstFour: 'C4,D4,E4,G4',
    secondFour: 'A4,G4,E4,D4',
    firstFourDur: 'C4/8,D4,E4,G4'
  },
  {
    name: 'C7 arp',
    description: '',
    notesDur: 'C4/8,E4,G4,Bb4,C5,E5,G5,Bb5',
    notes: 'C4,E4,G4,Bb4,E5,G5,Bb5',
    firstFour: 'C4,E4,G4,Bb4',
    secondFour: 'C5,E5,G5,Bb5',
    firstFourDur: 'C4/8,E4,G4,Bb4'
  },
  {
    name: 'Cm arp',
    description: '',
    notesDur: 'C4/8,Eb4,G4,C5,Eb5,G5,Eb5,C5',
    notes: 'C4,Eb4,G4,C5,G5,Eb5,C5',
    firstFour: 'C4,Eb4,G4,C5',
    secondFour: 'Eb5,G5,Eb5,C5',
    firstFourDur: 'C4/8,Eb4,G4,C5'
  },
  {
    name: 'Cmin7 arp',
    description: '',
    notesDur: 'C4/8,Eb4,G4,Bb4,C5,Eb5,G5,Bb5',
    notes: 'C4,Eb4,G4,Bb4,C5,Eb5,G5,Bb5',
    firstFour: 'C4,Eb4,G4,Bb4',
    secondFour: 'C5,Eb5,G5,Bb5',
    firstFourDur: 'C4/8,Eb4,G4,Bb4'
  },
  {
    name: 'Cmin scl',
    description: '',
    notesDur: 'C4/8,D4,Eb4,F4,G4,Ab4,Bb4,C5',
    notes: 'C4,D4,Eb4,F4,Ab4,Bb4,C5',
    firstFour: 'C4,D4,Eb4,F4',
    secondFour: 'G4,Ab4,Bb4,C5',
    firstFourDur: 'C4/8,D4,Eb4,F4'
  },
  {
    name: 'Cmin pent',
    description: '',
    notesDur: 'C4/8,D4,Eb4,G4,Ab4,G4,Eb4,D4',
    notes: 'C4,D4,Eb4,G4,Ab4,G4,Eb4,D4',
    firstFour: 'C4,D4,Eb4,G4',
    secondFour: 'Ab4,G4,Eb4,D4',
    firstFourDur: 'C4/8,D4,Eb4,G4'
  },
  {
    name: 'Cdim arp',
    description: '',
    notesDur: 'C4/8,Eb4,Gb4,C5,Eb5,Gb5,Eb5,C5',
    notes: 'C4,Eb4,Gb4,C5,Gb5,Eb5,C5',
    firstFour: 'C4,Eb4,Gb4,C5',
    secondFour: 'Eb5,Gb5,Eb5,C5',
    firstFourDur: 'C4/8,Eb4,Gb4,C5'
  },
  {
    name: 'Cm7b5 arp',
    description: '',
    notesDur: 'C4/8,Eb4,Gb4,Bb4,C5,Eb5,Gb5,Bb5',
    notes: 'C4,Eb4,Gb4,Bb4,Eb5,Gb5,Bb5',
    firstFour: 'C4,Eb4,Gb4,Bb4',
    secondFour: 'C5,Eb5,Gb5,Bb5',
    firstFourDur: 'C4/8,Eb4,Gb4,Bb4'
  },
  {
    name: 'Cdim7 arp',
    description: '',
    notesDur: 'C4/8,Eb4,Gb4,Bbb4,C5,Eb5,Gb5,Bbb5',
    notes: 'C4,Eb4,Gb4,Bbb4,Eb5,Gb5,Bbb5',
    firstFour: 'C4,Eb4,Gb4,Bbb4',
    secondFour: 'C5,Eb5,Gb5,Bbb5',
    firstFourDur: 'C4/8,Eb4,Gb4,Bbb4'
  },
  {
    name: 'Caug arp',
    description: '',
    notesDur: 'C4/8,E4,G#4,C5,E5,G#4,E5,C5',
    notes: 'C4,E4,G#4,C5,G#4,E5,C5',
    firstFour: 'C4,E4,G#4,C5',
    secondFour: 'E5,G#4,E5,C5',
    firstFourDur: 'C4/8,E4,G#4,C5'
  },
  {
    name: 'G arp',
    description: '',
    notesDur: 'G4/8,B4,D5,G5,B5,G5,D5,B4',
    notes: 'G4,B4,D5,G5,G5,D5,B4',
    firstFour: 'G4,B4,D5,G5',
    secondFour: 'B5,G5,D5,B4',
    firstFourDur: 'G4/8,B4,D5,G5'
  },
  {
    name: 'Gmaj7 arp',
    description: '',
    notesDur: 'G4/8,B4,D5,F#5,G5,B5,G5,F#5',
    notes: 'G4,B4,D5,F#5,B5,G5,F#5',
    firstFour: 'G4,B4,D5,F#5',
    secondFour: 'G5,B5,G5,F#5',
    firstFourDur: 'G4/8,B4,D5,F#5'
  },
  {
    name: 'Gmaj scl',
    description: '',
    notesDur: 'G4/8,A4,B4,C5,D5,E5,F#5,G5',
    notes: 'G4,A4,B4,C5,E5,F#5,G5',
    firstFour: 'G4,A4,B4,C5',
    secondFour: 'D5,E5,F#5,G5',
    firstFourDur: 'G4/8,A4,B4,C5'
  },
  {
    name: 'Gmaj pent',
    description: '',
    notesDur: 'G4/8,A4,B4,D5,E5,D5,B4,A4',
    notes: 'G4,A4,B4,D5,E5,D5,B4,A4',
    firstFour: 'G4,A4,B4,D5',
    secondFour: 'E5,D5,B4,A4',
    firstFourDur: 'G4/8,A4,B4,D5'
  },
  {
    name: 'G7 arp',
    description: '',
    notesDur: 'G4/8,B4,D5,F5,G5,B5,G5,F5',
    notes: 'G4,B4,D5,F5,B5,G5,F5',
    firstFour: 'G4,B4,D5,F5',
    secondFour: 'G5,B5,G5,F5',
    firstFourDur: 'G4/8,B4,D5,F5'
  },
  {
    name: 'Gm arp',
    description: '',
    notesDur: 'G4/8,Bb4,D5,G5,Bb5,G5,D5,Bb4',
    notes: 'G4,Bb4,D5,G5,G5,D5,Bb4',
    firstFour: 'G4,Bb4,D5,G5',
    secondFour: 'Bb5,G5,D5,Bb4',
    firstFourDur: 'G4/8,Bb4,D5,G5'
  },
  {
    name: 'Gmin7 arp',
    description: '',
    notesDur: 'G4/8,Bb4,D5,F5,G5,Bb5,G5,F5',
    notes: 'G4,Bb4,D5,F5,Bb5,G5,F5',
    firstFour: 'G4,Bb4,D5,F5',
    secondFour: 'G5,Bb5,G5,F5',
    firstFourDur: 'G4/8,Bb4,D5,F5'
  },
  {
    name: 'Gmin scl',
    description: '',
    notesDur: 'G4/8,A4,Bb4,C5,D5,Eb5,F5,G5',
    notes: 'G4,A4,Bb4,C5,Eb5,F5,G5',
    firstFour: 'G4,A4,Bb4,C5',
    secondFour: 'D5,Eb5,F5,G5',
    firstFourDur: 'G4/8,A4,Bb4,C5'
  },
  {
    name: 'Gmin pent',
    description: '',
    notesDur: 'G4/8,A4,Bb4,D5,Eb5,D5,Bb4,A4',
    notes: 'G4,A4,Bb4,D5,Eb5,D5,Bb4,A4',
    firstFour: 'G4,A4,Bb4,D5',
    secondFour: 'Eb5,D5,Bb4,A4',
    firstFourDur: 'G4/8,A4,Bb4,D5'
  },
  {
    name: 'Gdim arp',
    description: '',
    notesDur: 'G4/8,Bb4,Db5,G5,Bb5,G5,Db5,Bb4',
    notes: 'G4,Bb4,Db5,G5,G5,Db5,Bb4',
    firstFour: 'G4,Bb4,Db5,G5',
    secondFour: 'Bb5,G5,Db5,Bb4',
    firstFourDur: 'G4/8,Bb4,Db5,G5'
  },
  {
    name: 'Gm7b5 arp',
    description: '',
    notesDur: 'G4/8,Bb4,Db5,F5,G5,Bb5,G5,F5',
    notes: 'G4,Bb4,Db5,F5,Bb5,G5,F5',
    firstFour: 'G4,Bb4,Db5,F5',
    secondFour: 'G5,Bb5,G5,F5',
    firstFourDur: 'G4/8,Bb4,Db5,F5'
  },
  {
    name: 'Gdim7 arp',
    description: '',
    notesDur: 'G4/8,Bb4,Db5,Fb5,G5,Bb5,G5,Fb5',
    notes: 'G4,Bb4,Db5,Fb5,Bb5,G5,Fb5',
    firstFour: 'G4,Bb4,Db5,Fb5',
    secondFour: 'G5,Bb5,G5,Fb5',
    firstFourDur: 'G4/8,Bb4,Db5,Fb5'
  },
  {
    name: 'Gaug arp',
    description: '',
    notesDur: 'G4/8,B4,D#5,G5,B5,G5,D#5,B4',
    notes: 'G4,B4,D#5,G5,G5,D#5,B4',
    firstFour: 'G4,B4,D#5,G5',
    secondFour: 'B5,G5,D#5,B4',
    firstFourDur: 'G4/8,B4,D#5,G5'
  },
  {
    name: 'D arp',
    description: '',
    notesDur: 'D4/8,F#4,A4,D5,F#5,A5,F#5,D5',
    notes: 'D4,F#4,A4,D5,A5,F#5,D5',
    firstFour: 'D4,F#4,A4,D5',
    secondFour: 'F#5,A5,F#5,D5',
    firstFourDur: 'D4/8,F#4,A4,D5'
  },
  {
    name: 'Dmaj7 arp',
    description: '',
    notesDur: 'D4/8,F#4,A4,C#5,D5,F#5,A5,C#5',
    notes: 'D4,F#4,A4,C#5,F#5,A5,C#5',
    firstFour: 'D4,F#4,A4,C#5',
    secondFour: 'D5,F#5,A5,C#5',
    firstFourDur: 'D4/8,F#4,A4,C#5'
  },
  {
    name: 'Dmaj scl',
    description: '',
    notesDur: 'D4/8,E4,F#4,G4,A4,B4,C#5,D5',
    notes: 'D4,E4,F#4,G4,B4,C#5,D5',
    firstFour: 'D4,E4,F#4,G4',
    secondFour: 'A4,B4,C#5,D5',
    firstFourDur: 'D4/8,E4,F#4,G4'
  },
  {
    name: 'Dmaj pent',
    description: '',
    notesDur: 'D4/8,E4,F#4,A4,B4,A4,F#4,E4',
    notes: 'D4,E4,F#4,A4,B4,A4,F#4,E4',
    firstFour: 'D4,E4,F#4,A4',
    secondFour: 'B4,A4,F#4,E4',
    firstFourDur: 'D4/8,E4,F#4,A4'
  },
  {
    name: 'D7 arp',
    description: '',
    notesDur: 'D4/8,F#4,A4,C5,D5,F#5,A5,C5',
    notes: 'D4,F#4,A4,C5,F#5,A5,C5',
    firstFour: 'D4,F#4,A4,C5',
    secondFour: 'D5,F#5,A5,C5',
    firstFourDur: 'D4/8,F#4,A4,C5'
  },
  {
    name: 'Dm arp',
    description: '',
    notesDur: 'D4/8,F4,A4,D5,F5,A5,F5,D5',
    notes: 'D4,F4,A4,D5,A5,F5,D5',
    firstFour: 'D4,F4,A4,D5',
    secondFour: 'F5,A5,F5,D5',
    firstFourDur: 'D4/8,F4,A4,D5'
  },
  {
    name: 'Dmin7 arp',
    description: '',
    notesDur: 'D4/8,F4,A4,C5,D5,F5,A5,C6',
    notes: 'D4,F4,A4,C5,F5,A5,C6',
    firstFour: 'D4,F4,A4,C5',
    secondFour: 'D5,F5,A5,C6',
    firstFourDur: 'D4/8,F4,A4,C5'
  },
  {
    name: 'Dmin scl',
    description: '',
    notesDur: 'D4/8,E4,F4,G4,A4,Bb4,C5,D5',
    notes: 'D4,E4,F4,G4,Bb4,C5,D5',
    firstFour: 'D4,E4,F4,G4',
    secondFour: 'A4,Bb4,C5,D5',
    firstFourDur: 'D4/8,E4,F4,G4'
  },
  {
    name: 'Dmin pent',
    description: '',
    notesDur: 'D4/8,E4,F4,A4,Bb4,A4,F4,E4',
    notes: 'D4,E4,F4,A4,Bb4,A4,F4,E4',
    firstFour: 'D4,E4,F4,A4',
    secondFour: 'Bb4,A4,F4,E4',
    firstFourDur: 'D4/8,E4,F4,A4'
  },
  {
    name: 'Ddim arp',
    description: '',
    notesDur: 'D4/8,F4,Ab4,D5,F5,Ab5,F5,D5',
    notes: 'D4,F4,Ab4,D5,Ab5,F5,D5',
    firstFour: 'D4,F4,Ab4,D5',
    secondFour: 'F5,Ab5,F5,D5',
    firstFourDur: 'D4/8,F4,Ab4,D5'
  },
  {
    name: 'Dm7b5 arp',
    description: '',
    notesDur: 'D4/8,F4,Ab4,C5,D5,F5,Ab5,C6',
    notes: 'D4,F4,Ab4,C5,F5,Ab5,C6',
    firstFour: 'D4,F4,Ab4,C5',
    secondFour: 'D5,F5,Ab5,C6',
    firstFourDur: 'D4/8,F4,Ab4,C5'
  },
  {
    name: 'Ddim7 arp',
    description: '',
    notesDur: 'D4/8,F4,Ab4,Cb5,D5,F5,Ab5,Cb6',
    notes: 'D4,F4,Ab4,Cb5,F5,Ab5,Cb6',
    firstFour: 'D4,F4,Ab4,Cb5',
    secondFour: 'D5,F5,Ab5,Cb6',
    firstFourDur: 'D4/8,F4,Ab4,Cb5'
  },
  {
    name: 'Daug arp',
    description: '',
    notesDur: 'D4/8,F#4,A#4,D5,F#5,A#5,F#5,D5',
    notes: 'D4,F#4,A#4,D5,A#5,F#5,D5',
    firstFour: 'D4,F#4,A#4,D5',
    secondFour: 'F#5,A#5,F#5,D5',
    firstFourDur: 'D4/8,F#4,A#4,D5'
  },
  {
    name: 'A arp',
    description: '',
    notesDur: 'A3/8,C#4,E4,A4,C#5,E5,A5,E5',
    notes: 'A3,C#4,E4,A4,E5,A5,E5',
    firstFour: 'A3,C#4,E4,A4',
    secondFour: 'C#5,E5,A5,E5',
    firstFourDur: 'A3/8,C#4,E4,A4'
  },
  {
    name: 'Amaj7 arp',
    description: '',
    notesDur: 'A3/8,C#4,E4,G#4,A4,C#5,E5,G#5',
    notes: 'A3,C#4,E4,G#4,C#5,E5,G#5',
    firstFour: 'A3,C#4,E4,G#4',
    secondFour: 'A4,C#5,E5,G#5',
    firstFourDur: 'A3/8,C#4,E4,G#4'
  },
  {
    name: 'Amaj scl',
    description: '',
    notesDur: 'A4/8,B4,C#5,D5,E5,F#5,G#5,A5',
    notes: 'A4,B4,C#5,D5,F#5,G#5,A5',
    firstFour: 'A4,B4,C#5,D5',
    secondFour: 'E5,F#5,G#5,A5',
    firstFourDur: 'A4/8,B4,C#5,D5'
  },
  {
    name: 'Amaj pent',
    description: '',
    notesDur: 'A4/8,B4,C#5,E5,F#5,E5,C#5,B4',
    notes: 'A4,B4,C#5,E5,F#5,E5,C#5,B4',
    firstFour: 'A4,B4,C#5,E5',
    secondFour: 'F#5,E5,C#5,B4',
    firstFourDur: 'A4/8,B4,C#5,E5'
  },
  {
    name: 'A7 arp',
    description: '',
    notesDur: 'A3/8,C#4,E4,G4,A4,C#5,E5,G5',
    notes: 'A3,C#4,E4,G4,C#5,E5,G5',
    firstFour: 'A3,C#4,E4,G4',
    secondFour: 'A4,C#5,E5,G5',
    firstFourDur: 'A3/8,C#4,E4,G4'
  },
  {
    name: 'Am arp',
    description: '',
    notesDur: 'A3/8,C4,E4,A4,C5,E5,A5,E5',
    notes: 'A3,C4,E4,A4,E5,A5,E5',
    firstFour: 'A3,C4,E4,A4',
    secondFour: 'C5,E5,A5,E5',
    firstFourDur: 'A3/8,C4,E4,A4'
  },
  {
    name: 'Amin7 arp',
    description: '',
    notesDur: 'A3/8,C4,E4,G4,A4,C5,E5,G5',
    notes: 'A3,C4,E4,G4,C5,E5,G5',
    firstFour: 'A3,C4,E4,G4',
    secondFour: 'A4,C5,E5,G5',
    firstFourDur: 'A3/8,C4,E4,G4'
  },
  {
    name: 'Amin scl',
    description: '',
    notesDur: 'A4/8,B4,C5,D5,E5,F5,G5,A5',
    notes: 'A4,B4,C5,D5,F5,G5,A5',
    firstFour: 'A4,B4,C5,D5',
    secondFour: 'E5,F5,G5,A5',
    firstFourDur: 'A4/8,B4,C5,D5'
  },
  {
    name: 'Amin pent',
    description: '',
    notesDur: 'A4/8,B4,C5,E5,F5,E5,C5,B4',
    notes: 'A4,B4,C5,E5,F5,E5,C5,B4',
    firstFour: 'A4,B4,C5,E5',
    secondFour: 'F5,E5,C5,B4',
    firstFourDur: 'A4/8,B4,C5,E5'
  },
  {
    name: 'Adim arp',
    description: '',
    notesDur: 'A3/8,C4,Eb4,A4,C5,Eb5,A5,Eb5',
    notes: 'A3,C4,Eb4,A4,Eb5,A5,Eb5',
    firstFour: 'A3,C4,Eb4,A4',
    secondFour: 'C5,Eb5,A5,Eb5',
    firstFourDur: 'A3/8,C4,Eb4,A4'
  },
  {
    name: 'Am7b5 arp',
    description: '',
    notesDur: 'A3/8,C4,Eb4,G4,A4,C5,Eb5,G5',
    notes: 'A3,C4,Eb4,G4,C5,Eb5,G5',
    firstFour: 'A3,C4,Eb4,G4',
    secondFour: 'A4,C5,Eb5,G5',
    firstFourDur: 'A3/8,C4,Eb4,G4'
  },
  {
    name: 'Adim7 arp',
    description: '',
    notesDur: 'A3/8,C4,Eb4,Gb4,A4,C5,Eb5,Gb5',
    notes: 'A3,C4,Eb4,Gb4,C5,Eb5,Gb5',
    firstFour: 'A3,C4,Eb4,Gb4',
    secondFour: 'A4,C5,Eb5,Gb5',
    firstFourDur: 'A3/8,C4,Eb4,Gb4'
  },
  {
    name: 'Aaug arp',
    description: '',
    notesDur: 'A3/8,C#4,E#4,A4,C#5,E#5,A5,E#5',
    notes: 'A3,C#4,E#4,A4,E#5,A5,E#5',
    firstFour: 'A3,C#4,E#4,A4',
    secondFour: 'C#5,E#5,A5,E#5',
    firstFourDur: 'A3/8,C#4,E#4,A4'
  },
  {
    name: 'E arp',
    description: '',
    notesDur: 'E4/8,G#4,B4,E5,G#5,B5,G#5,E5',
    notes: 'E4,G#4,B4,E5,B5,G#5,E5',
    firstFour: 'E4,G#4,B4,E5',
    secondFour: 'G#5,B5,G#5,E5',
    firstFourDur: 'E4/8,G#4,B4,E5'
  },
  {
    name: 'Emaj7 arp',
    description: '',
    notesDur: 'E4/8,G#4,B5,D#5,E5,G#5,E5,D#5',
    notes: 'E4,G#4,B5,D#5,G#5,E5,D#5',
    firstFour: 'E4,G#4,B5,D#5',
    secondFour: 'E5,G#5,E5,D#5',
    firstFourDur: 'E4/8,G#4,B5,D#5'
  },
  {
    name: 'Emaj scl',
    description: '',
    notesDur: 'E4/8,F#4,G#4,A4,B4,C#5,D#5,E5',
    notes: 'E4,F#4,G#4,A4,C#5,D#5,E5',
    firstFour: 'E4,F#4,G#4,A4',
    secondFour: 'B4,C#5,D#5,E5',
    firstFourDur: 'E4/8,F#4,G#4,A4'
  },
  {
    name: 'Emaj pent',
    description: '',
    notesDur: 'E4/8,F#4,G#4,B4,C#5,B4,G#4,F#4',
    notes: 'E4,F#4,G#4,B4,C#5,B4,G#4,F#4',
    firstFour: 'E4,F#4,G#4,B4',
    secondFour: 'C#5,B4,G#4,F#4',
    firstFourDur: 'E4/8,F#4,G#4,B4'
  },
  {
    name: 'E7 arp',
    description: '',
    notesDur: 'E4/8,G#4,B5,D5,E5,G#5,E5,D5',
    notes: 'E4,G#4,B5,D5,G#5,E5,D5',
    firstFour: 'E4,G#4,B5,D5',
    secondFour: 'E5,G#5,E5,D5',
    firstFourDur: 'E4/8,G#4,B5,D5'
  },
  {
    name: 'Em arp',
    description: '',
    notesDur: 'E4/8,G4,B4,E5,G5,B5,G5,E5',
    notes: 'E4,G4,B4,E5,B5,G5,E5',
    firstFour: 'E4,G4,B4,E5',
    secondFour: 'G5,B5,G5,E5',
    firstFourDur: 'E4/8,G4,B4,E5'
  },
  {
    name: 'Emin7 arp',
    description: '',
    notesDur: 'E4/8,G4,B5,D5,E5,G5,E5,D5',
    notes: 'E4,G4,B5,D5,G5,E5,D5',
    firstFour: 'E4,G4,B5,D5',
    secondFour: 'E5,G5,E5,D5',
    firstFourDur: 'E4/8,G4,B5,D5'
  },
  {
    name: 'Emin scl',
    description: '',
    notesDur: 'E4/8,F#4,G4,A4,B4,C5,D5,E5',
    notes: 'E4,F#4,G4,A4,C5,D5,E5',
    firstFour: 'E4,F#4,G4,A4',
    secondFour: 'B4,C5,D5,E5',
    firstFourDur: 'E4/8,F#4,G4,A4'
  },
  {
    name: 'Emin pent',
    description: '',
    notesDur: 'E4/8,F#4,G4,B4,C5,B4,G4,F#4',
    notes: 'E4,F#4,G4,B4,C5,B4,G4,F#4',
    firstFour: 'E4,F#4,G4,B4',
    secondFour: 'C5,B4,G4,F#4',
    firstFourDur: 'E4/8,F#4,G4,B4'
  },
  {
    name: 'Edim arp',
    description: '',
    notesDur: 'E4/8,G4,Bb4,E5,G5,Bb5,G5,E5',
    notes: 'E4,G4,Bb4,E5,Bb5,G5,E5',
    firstFour: 'E4,G4,Bb4,E5',
    secondFour: 'G5,Bb5,G5,E5',
    firstFourDur: 'E4/8,G4,Bb4,E5'
  },
  {
    name: 'Em7b5 arp',
    description: '',
    notesDur: 'E4/8,G4,Bb5,D5,E5,G5,E5,D5',
    notes: 'E4,G4,Bb5,D5,G5,E5,D5',
    firstFour: 'E4,G4,Bb5,D5',
    secondFour: 'E5,G5,E5,D5',
    firstFourDur: 'E4/8,G4,Bb5,D5'
  },
  {
    name: 'Edim7 arp',
    description: '',
    notesDur: 'E4/8,G4,Bb5,Db5,E5,G5,E5,Db5',
    notes: 'E4,G4,Bb5,Db5,G5,E5,Db5',
    firstFour: 'E4,G4,Bb5,Db5',
    secondFour: 'E5,G5,E5,Db5',
    firstFourDur: 'E4/8,G4,Bb5,Db5'
  },
  {
    name: 'Eaug arp',
    description: '',
    notesDur: 'E4/8,G#4,B#4,E5,G#5,B#5,G#5,E5',
    notes: 'E4,G#4,B#4,E5,B#5,G#5,E5',
    firstFour: 'E4,G#4,B#4,E5',
    secondFour: 'G#5,B#5,G#5,E5',
    firstFourDur: 'E4/8,G#4,B#4,E5'
  },
  {
    name: 'F arp',
    description: '',
    notesDur: 'F4/8,A4,C5,F5,A5,C6,A5,F5',
    notes: 'F4,A4,C5,F5,C6,A5,F5',
    firstFour: 'F4,A4,C5,F5',
    secondFour: 'A5,C6,A5,F5',
    firstFourDur: 'F4/8,A4,C5,F5'
  },
  {
    name: 'Fmaj7 arp',
    description: '',
    notesDur: 'F4/8,A4,C5,E5,F5,A5,C6,A5',
    notes: 'F4,A4,C5,E5,A5,C6,A5',
    firstFour: 'F4,A4,C5,E5',
    secondFour: 'F5,A5,C6,A5',
    firstFourDur: 'F4/8,A4,C5,E5'
  },
  {
    name: 'Fmaj scl',
    description: '',
    notesDur: 'F4/8,G4,A4,Bb4,C5,D5,E5,F5',
    notes: 'F4,G4,A4,Bb4,D5,E5,F5',
    firstFour: 'F4,G4,A4,Bb4',
    secondFour: 'C5,D5,E5,F5',
    firstFourDur: 'F4/8,G4,A4,Bb4'
  },
  {
    name: 'Fmaj pent',
    description: '',
    notesDur: 'F4/8,G4,A4,C5,D5,C5,A4,G4',
    notes: 'F4,G4,A4,C5,D5,C5,A4,G4',
    firstFour: 'F4,G4,A4,C5',
    secondFour: 'D5,C5,A4,G4',
    firstFourDur: 'F4/8,G4,A4,C5'
  },
  {
    name: 'F7 arp',
    description: '',
    notesDur: 'F4/8,A4,C5,Eb5,F5,A5,C6,A5',
    notes: 'F4,A4,C5,Eb5,A5,C6,A5',
    firstFour: 'F4,A4,C5,Eb5',
    secondFour: 'F5,A5,C6,A5',
    firstFourDur: 'F4/8,A4,C5,Eb5'
  },
  {
    name: 'Fm arp',
    description: '',
    notesDur: 'F4/8,Ab4,C5,F5,Ab5,C6,Ab5,F5',
    notes: 'F4,Ab4,C5,F5,C6,Ab5,F5',
    firstFour: 'F4,Ab4,C5,F5',
    secondFour: 'Ab5,C6,Ab5,F5',
    firstFourDur: 'F4/8,Ab4,C5,F5'
  },
  {
    name: 'Fmin7 arp',
    description: '',
    notesDur: 'F4/8,Ab4,C5,Eb5,F5,Ab5,C6,Ab5',
    notes: 'F4,Ab4,C5,Eb5,Ab5,C6,Ab5',
    firstFour: 'F4,Ab4,C5,Eb5',
    secondFour: 'F5,Ab5,C6,Ab5',
    firstFourDur: 'F4/8,Ab4,C5,Eb5'
  },
  {
    name: 'Fmin scl',
    description: '',
    notesDur: 'F4/8,G4,Ab4,Bb4,C5,Db5,Eb5,F5',
    notes: 'F4,G4,Ab4,Bb4,Db5,Eb5,F5',
    firstFour: 'F4,G4,Ab4,Bb4',
    secondFour: 'C5,Db5,Eb5,F5',
    firstFourDur: 'F4/8,G4,Ab4,Bb4'
  },
  {
    name: 'Fmin pent',
    description: '',
    notesDur: 'F4/8,G4,Ab4,C5,Db5,C5,Ab4,G4',
    notes: 'F4,G4,Ab4,C5,Db5,C5,Ab4,G4',
    firstFour: 'F4,G4,Ab4,C5',
    secondFour: 'Db5,C5,Ab4,G4',
    firstFourDur: 'F4/8,G4,Ab4,C5'
  },
  {
    name: 'Fdim arp',
    description: '',
    notesDur: 'F4/8,Ab4,Cb5,F5,Ab5,Cb6,Ab5,F5',
    notes: 'F4,Ab4,Cb5,F5,Cb6,Ab5,F5',
    firstFour: 'F4,Ab4,Cb5,F5',
    secondFour: 'Ab5,Cb6,Ab5,F5',
    firstFourDur: 'F4/8,Ab4,Cb5,F5'
  },
  {
    name: 'Fm7b5 arp',
    description: '',
    notesDur: 'F4/8,Ab4,Cb5,Eb5,F5,Ab5,Cb6,Ab5',
    notes: 'F4,Ab4,Cb5,Eb5,Ab5,Cb6,Ab5',
    firstFour: 'F4,Ab4,Cb5,Eb5',
    secondFour: 'F5,Ab5,Cb6,Ab5',
    firstFourDur: 'F4/8,Ab4,Cb5,Eb5'
  },
  {
    name: 'Fdim7 arp',
    description: '',
    notesDur: 'F4/8,Ab4,Cb5,Ebb5,F5,Ab5,Cb6,Ab5',
    notes: 'F4,Ab4,Cb5,Ebb5,Ab5,Cb6,Ab5',
    firstFour: 'F4,Ab4,Cb5,Ebb5',
    secondFour: 'F5,Ab5,Cb6,Ab5',
    firstFourDur: 'F4/8,Ab4,Cb5,Ebb5'
  },
  {
    name: 'Faug arp',
    description: '',
    notesDur: 'F4/8,A4,C#5,F5,A5,C#6,A5,F5',
    notes: 'F4,A4,C#5,F5,C#6,A5,F5',
    firstFour: 'F4,A4,C#5,F5',
    secondFour: 'A5,C#6,A5,F5',
    firstFourDur: 'F4/8,A4,C#5,F5'
  },
  {
    name: 'Bb arp',
    description: '',
    notesDur: 'Bb3/8,D4,F4,Bb4,D5,F5,Bb5,F5',
    notes: 'Bb3,D4,F4,Bb4,F5,Bb5,F5',
    firstFour: 'Bb3,D4,F4,Bb4',
    secondFour: 'D5,F5,Bb5,F5',
    firstFourDur: 'Bb3/8,D4,F4,Bb4'
  },
  {
    name: 'Bbmaj7 arp',
    description: '',
    notesDur: 'Bb3/8,D4,F4,A4,Bb4,D5,F5,A5',
    notes: 'Bb3,D4,F4,A4,D5,F5,A5',
    firstFour: 'Bb3,D4,F4,A4',
    secondFour: 'Bb4,D5,F5,A5',
    firstFourDur: 'Bb3/8,D4,F4,A4'
  },
  {
    name: 'Bbmaj scl',
    description: '',
    notesDur: 'Bb3/8,C4,D4,Eb4,F4,G4,A4,Bb4',
    notes: 'Bb3,C4,D4,Eb4,G4,A4,Bb4',
    firstFour: 'Bb3,C4,D4,Eb4',
    secondFour: 'F4,G4,A4,Bb4',
    firstFourDur: 'Bb3/8,C4,D4,Eb4'
  },
  {
    name: 'Bbmaj pent',
    description: '',
    notesDur: 'Bb3/8,C4,D4,F4,G4,F4,D4,C4',
    notes: 'Bb3,C4,D4,F4,G4,F4,D4,C4',
    firstFour: 'Bb3,C4,D4,F4',
    secondFour: 'G4,F4,D4,C4',
    firstFourDur: 'Bb3/8,C4,D4,F4'
  },
  {
    name: 'Bb7 arp',
    description: '',
    notesDur: 'Bb3/8,D4,F4,Ab4,Bb4,D5,F5,Ab5',
    notes: 'Bb3,D4,F4,Ab4,D5,F5,Ab5',
    firstFour: 'Bb3,D4,F4,Ab4',
    secondFour: 'Bb4,D5,F5,Ab5',
    firstFourDur: 'Bb3/8,D4,F4,Ab4'
  },
  {
    name: 'Bbm arp',
    description: '',
    notesDur: 'Bb3/8,Db4,F4,Bb4,Db5,F5,Bb5,F5',
    notes: 'Bb3,Db4,F4,Bb4,F5,Bb5,F5',
    firstFour: 'Bb3,Db4,F4,Bb4',
    secondFour: 'Db5,F5,Bb5,F5',
    firstFourDur: 'Bb3/8,Db4,F4,Bb4'
  },
  {
    name: 'Bbmin7 arp',
    description: '',
    notesDur: 'Bb3/8,Db4,F4,Ab4,Bb4,Db5,F5,Ab5',
    notes: 'Bb3,Db4,F4,Ab4,Db5,F5,Ab5',
    firstFour: 'Bb3,Db4,F4,Ab4',
    secondFour: 'Bb4,Db5,F5,Ab5',
    firstFourDur: 'Bb3/8,Db4,F4,Ab4'
  },
  {
    name: 'Bbmin scl',
    description: '',
    notesDur: 'Bb3/8,C4,Db4,Eb4,F4,Gb4,Ab4,Bb4',
    notes: 'Bb3,C4,Db4,Eb4,Gb4,Ab4,Bb4',
    firstFour: 'Bb3,C4,Db4,Eb4',
    secondFour: 'F4,Gb4,Ab4,Bb4',
    firstFourDur: 'Bb3/8,C4,Db4,Eb4'
  },
  {
    name: 'Bbmin pent',
    description: '',
    notesDur: 'Bb3/8,C4,Db4,F4,Gb4,F4,Db4,C4',
    notes: 'Bb3,C4,Db4,F4,Gb4,F4,Db4,C4',
    firstFour: 'Bb3,C4,Db4,F4',
    secondFour: 'Gb4,F4,Db4,C4',
    firstFourDur: 'Bb3/8,C4,Db4,F4'
  },
  {
    name: 'Bbdim arp',
    description: '',
    notesDur: 'Bb3/8,Db4,Fb4,Bb4,Db5,Fb5,Bb5,Fb5',
    notes: 'Bb3,Db4,Fb4,Bb4,Fb5,Bb5,Fb5',
    firstFour: 'Bb3,Db4,Fb4,Bb4',
    secondFour: 'Db5,Fb5,Bb5,Fb5',
    firstFourDur: 'Bb3/8,Db4,Fb4,Bb4'
  },
  {
    name: 'Bbm7b5 arp',
    description: '',
    notesDur: 'Bb3/8,Db4,Fb4,Ab4,Bb4,Db5,Fb5,Ab5',
    notes: 'Bb3,Db4,Fb4,Ab4,Db5,Fb5,Ab5',
    firstFour: 'Bb3,Db4,Fb4,Ab4',
    secondFour: 'Bb4,Db5,Fb5,Ab5',
    firstFourDur: 'Bb3/8,Db4,Fb4,Ab4'
  },
  {
    name: 'Bbdim7 arp',
    description: '',
    notesDur: 'Bb3/8,Db4,Fb4,Abb4,Bb4,Db5,Fb5,Abb5',
    notes: 'Bb3,Db4,Fb4,Abb4,Db5,Fb5,Abb5',
    firstFour: 'Bb3,Db4,Fb4,Abb4',
    secondFour: 'Bb4,Db5,Fb5,Abb5',
    firstFourDur: 'Bb3/8,Db4,Fb4,Abb4'
  },
  {
    name: 'Bbaug arp',
    description: '',
    notesDur: 'Bb3/8,D4,F#4,Bb4,D5,F#5,Bb5,F#5',
    notes: 'Bb3,D4,F#4,Bb4,F#5,Bb5,F#5',
    firstFour: 'Bb3,D4,F#4,Bb4',
    secondFour: 'D5,F#5,Bb5,F#5',
    firstFourDur: 'Bb3/8,D4,F#4,Bb4'
  },
  {
    name: 'Eb arp',
    description: '',
    notesDur: 'Eb4/8,G4,Bb4,Eb5,G5,Bb5,G5,Eb5',
    notes: 'Eb4,G4,Bb4,Eb5,Bb5,G5,Eb5',
    firstFour: 'Eb4,G4,Bb4,Eb5',
    secondFour: 'G5,Bb5,G5,Eb5',
    firstFourDur: 'Eb4/8,G4,Bb4,Eb5'
  },
  {
    name: 'Ebmaj7 arp',
    description: '',
    notesDur: 'Eb4/8,G4,Bb4,D5,Eb5,G5,Bb5,G5',
    notes: 'Eb4,G4,Bb4,D5,G5,Bb5,G5',
    firstFour: 'Eb4,G4,Bb4,D5',
    secondFour: 'Eb5,G5,Bb5,G5',
    firstFourDur: 'Eb4/8,G4,Bb4,D5'
  },
  {
    name: 'Ebmaj scl',
    description: '',
    notesDur: 'Eb4/8,F4,G4,Ab4,Bb4,C5,D5,Eb5',
    notes: 'Eb4,F4,G4,Ab4,C5,D5,Eb5',
    firstFour: 'Eb4,F4,G4,Ab4',
    secondFour: 'Bb4,C5,D5,Eb5',
    firstFourDur: 'Eb4/8,F4,G4,Ab4'
  },
  {
    name: 'Ebmaj pent',
    description: '',
    notesDur: 'Eb4/8,F4,G4,Bb4,C5,Bb4,G4,F4',
    notes: 'Eb4,F4,G4,Bb4,C5,Bb4,G4,F4',
    firstFour: 'Eb4,F4,G4,Bb4',
    secondFour: 'C5,Bb4,G4,F4',
    firstFourDur: 'Eb4/8,F4,G4,Bb4'
  },
  {
    name: 'Eb7 arp',
    description: '',
    notesDur: 'Eb4/8,G4,Bb4,Db5,Eb5,G5,Bb5,G5',
    notes: 'Eb4,G4,Bb4,Db5,G5,Bb5,G5',
    firstFour: 'Eb4,G4,Bb4,Db5',
    secondFour: 'Eb5,G5,Bb5,G5',
    firstFourDur: 'Eb4/8,G4,Bb4,Db5'
  },
  {
    name: 'Ebm arp',
    description: '',
    notesDur: 'Eb4/8,Gb4,Bb4,Eb5,Gb5,Bb5,Gb5,Eb5',
    notes: 'Eb4,Gb4,Bb4,Eb5,Bb5,Gb5,Eb5',
    firstFour: 'Eb4,Gb4,Bb4,Eb5',
    secondFour: 'Gb5,Bb5,Gb5,Eb5',
    firstFourDur: 'Eb4/8,Gb4,Bb4,Eb5'
  },
  {
    name: 'Ebmin7 arp',
    description: '',
    notesDur: 'Eb4/8,Gb4,Bb4,Db5,Eb5,Gb5,Bb5,Gb5',
    notes: 'Eb4,Gb4,Bb4,Db5,Gb5,Bb5,Gb5',
    firstFour: 'Eb4,Gb4,Bb4,Db5',
    secondFour: 'Eb5,Gb5,Bb5,Gb5',
    firstFourDur: 'Eb4/8,Gb4,Bb4,Db5'
  },
  {
    name: 'Ebmin scl',
    description: '',
    notesDur: 'Eb4/8,F4,Gb4,Ab4,Bb4,Cb5,Db5,Eb5',
    notes: 'Eb4,F4,Gb4,Ab4,Cb5,Db5,Eb5',
    firstFour: 'Eb4,F4,Gb4,Ab4',
    secondFour: 'Bb4,Cb5,Db5,Eb5',
    firstFourDur: 'Eb4/8,F4,Gb4,Ab4'
  },
  {
    name: 'Ebmin pent',
    description: '',
    notesDur: 'Eb4/8,F4,Gb4,Bb4,Cb5,Bb4,Gb4,F4',
    notes: 'Eb4,F4,Gb4,Bb4,Cb5,Bb4,Gb4,F4',
    firstFour: 'Eb4,F4,Gb4,Bb4',
    secondFour: 'Cb5,Bb4,Gb4,F4',
    firstFourDur: 'Eb4/8,F4,Gb4,Bb4'
  },
  {
    name: 'Ebdim arp',
    description: '',
    notesDur: 'Eb4/8,Gb4,Bbb4,Eb5,Gb5,Bbb5,Gb5,Eb5',
    notes: 'Eb4,Gb4,Bbb4,Eb5,Bbb5,Gb5,Eb5',
    firstFour: 'Eb4,Gb4,Bbb4,Eb5',
    secondFour: 'Gb5,Bbb5,Gb5,Eb5',
    firstFourDur: 'Eb4/8,Gb4,Bbb4,Eb5'
  },
  {
    name: 'Ebm7b5 arp',
    description: '',
    notesDur: 'Eb4/8,Gb4,Bbb4,Db5,Eb5,Gb5,Bbb5,Gb5',
    notes: 'Eb4,Gb4,Bbb4,Db5,Gb5,Bbb5,Gb5',
    firstFour: 'Eb4,Gb4,Bbb4,Db5',
    secondFour: 'Eb5,Gb5,Bbb5,Gb5',
    firstFourDur: 'Eb4/8,Gb4,Bbb4,Db5'
  },
  {
    name: 'Ebdim7 arp',
    description: '',
    notesDur: 'Eb4/8,Gb4,Bbb4,Dbb5,Eb5,Gb5,Bbb5,Gb5',
    notes: 'Eb4,Gb4,Bbb4,Dbb5,Gb5,Bbb5,Gb5',
    firstFour: 'Eb4,Gb4,Bbb4,Dbb5',
    secondFour: 'Eb5,Gb5,Bbb5,Gb5',
    firstFourDur: 'Eb4/8,Gb4,Bbb4,Dbb5'
  },
  {
    name: 'Ebaug arp',
    description: '',
    notesDur: 'Eb4/8,G4,B4,Eb5,G5,B5,G5,Eb5',
    notes: 'Eb4,G4,B4,Eb5,B5,G5,Eb5',
    firstFour: 'Eb4,G4,B4,Eb5',
    secondFour: 'G5,B5,G5,Eb5',
    firstFourDur: 'Eb4/8,G4,B4,Eb5'
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
