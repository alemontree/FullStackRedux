use strict;
import { expect } from 'chai';
import { List, Map } from 'immutable';
// import chaiImmutable from 'chai-immutable';

// chai.use(chaiImmutable);


describe('immutability', ()=> {
  describe('a number', ()=> {
    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', ()=> {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal.(43);
      expect(state).to.equal(42);
    });
  });

  describe('A List', ()=> {
    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', ()=> {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.be.equal(List.of(
        'Trainspotting', 
        '28 Days Later',
        'Sunshine'
      ));
      expect(state).to.equal(List.of(
        'Trainspotting', 
        '28 Days Later'
      ));
    });
  });

  describe('A Tree', ()=> {
    function addMovie(currentState, movie) {
      return currentState.set(
        'movies',
        currentState.get('moves').push(movie)
      );
    };

    it('is immutable', ()=> {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
    });
  });
});
