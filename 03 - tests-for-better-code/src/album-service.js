import { DB } from './db';

/**
 * Why is this API hard to use?
 * Why is this code hard to test?
 * Why is this code bad?
 */
export class AlbumService {
  constructor() {
    const db = new DB();
    this.artists = db.getArtists();
    this.albums = db.getAlbums();
    this.tracks = db.getTracks();
  }

  selectArtist(artistName) {
    this.currentArtistName = artistName;
  }

  selectAlbum(albumName) {
    this.currentAlbumName = albumName;
  }

  /**
   * Gets a list of album titles for the selected artist, or all albums if
   * no artist has been selected.
   */
  getAlbums() {
    let results = [];

    if (!this.currentArtistName) {
      for (let i=0; i < this.albums.length; ++i) {
        results.push(this.albums[i].title);
      }

      return results;
    }
    else {
      let artistId = this._getArtistId();

      for (let i = 0; i < this.albums.length; ++i) {
        if (this.albums[i].artistId === artistId) {
          results.push(this.albums[i].title);
        }
      }
    }

    return results;
  }

  /**
   * Gets a list of track titles for the selected artist and album.
   * If no album is seleted, gets all track titles for the artist.
   * If no artist is selected, gets all track titles for the album.
   * If nothing is selected, gets all track titles in the DB.
   */
  getTracks() {
    let results = [];

    if (!this.currentArtist && !this.currentName) {
      for (let i = 0; i < this.tracks.length; ++i) {
        results.push(this.tracks[i].title);
      }
    }
    else {
      if (this.currentArtist) {
        let artistId = _getArtistId();

        for (let i = 0; i < this.tracks.length; ++i) {
          if (this.tracks.artistId === artistId) {
            results.push(this.tracks[i].title);
          }
        }
      }

      if (this.currentAlbum) {
        let albumId = _getAlbumId();
        let filteredResults = [];

        for (let i = 0; i < results.length; ++i) {
          if (results.albumId === albumId) {
            results.push(this.tracks[i].title);
          }
        }

        results = filteredResults;
      }
    }

    return results;
  }

  _getArtistId() {
    if (!this.currentArtistName) {
      throw new Error('No artist selected');
    }

    for (let i = 0; i < this.artists.length; ++i) {
      if (this.currentArtistName === this.artists[i].name) {
        return this.artists[i].artistId;
      }
    }

    throw new Error('Artist not found');
  }

  _getAlbumId() {
    if (!this.currentAlbumName) {
      throw new Error('No album selected');
    }

    for (let i = 0; i < this.albums.length; ++i) {
      if (this.currentAlbumName === this.albums[i].name) {
        return this.albums[i].albumId;
      }
    }

    throw new Error('Album not found');
  }
}
