import { AlbumService } from './album-service';
import { expect } from 'chai';

// Superhax
import { DB } from './db';
DB.prototype.getArtists = function () {
  return [];
}

DB.prototype.getAlbums = function () {
  return [];
}

DB.prototype.getTracks = function () {
  return [];
}

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
  // Happy Cases:

  it('should let me get all the album titles', () => {
    DB.prototype.getAlbums = function() {
      return [
        { albumId: 0, title: 'Kind of Blue', artistId: 3 },
        { albumId: 1, title: 'We Like it Here', artistId: 3 } ];
    }

    const service = new AlbumService();
    expect(service.getAlbums()).to.eql([ 'Kind of Blue', 'We Like it Here' ]);
  });

  it('should let me get all the album titles by a given artist', () => {
    DB.prototype.getAlbums = function() {
      return [
        { albumId: 0, title: 'Kind of Blue', artistId: 3 },
        { albumId: 1, title: 'We Like it Here', artistId: 4 } ];
    }

    DB.prototype.getArtists = function () {
      return [
        { artistId: 3, name: 'Miles Davis Nonet' },
        { artistId: 4, name: 'Snarky Puppy' } ];
    };

    const service = new AlbumService();
    service.selectArtist('Miles Davis Nonet');
    expect(service.getAlbums()).to.eql([ 'Kind of Blue' ]);
  });

  it('should let me get all the track titles', () => {
    DB.prototype.getTracks = function() {
      return [
        { trackId: 0, title: 'So What', artistId: 3, albumId: 1 },
        { trackId: 1, title: 'Freddie Freeloader', artistId: 3, albumId: 1 },
        { trackId: 1, title: 'Shofukan', artistId: 4, albumId: 2 } ];
    }

    const service = new AlbumService();
    expect(service.getTracks()).to.eql([
      'So What',
      'Freddie Freeloader',
      'Shofukan',
    ]);
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
