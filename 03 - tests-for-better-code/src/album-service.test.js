import { AlbumService } from './album-service';

/**
 * Exercise 1: how would you write the following tests with the existing
 *  AlbumService?
 *
 * Discussion: how can we adjust the API of AlbumService to make it easier to
 *  write these tests?
 *
 * Exercise 2: write the tests with the adjusted API.
 *
 * Exercise 3: refactor the code while keeping the tests the same.
 */
describe('AlbumService', () => {
  let service;

  beforeEach(() => {
    service = new AlbumService();
  });

  // Happy Cases:

  it('should let me get all the album titles', () => {

  });

  it('should let me get all the album titles by a given artist', () => {

  });

  it('should let me get all the track titles', () => {

  });

  it('should let me get all the track titles by a given artist', () => {

  });

  it('should let me get all the track titles by a given album', () => {

  });

  it('should let me get all the track titles by a given album and artist', () => {

  });

  // Boundary Cases:

  it('should get me an empty list of albums for an unknown artist', () => {

  });

  it('should get me an empty list of track titles for an unknown artist', () => {

  });

  it('should get me an empty list of track titles for an unknown album', () => {

  });
})
