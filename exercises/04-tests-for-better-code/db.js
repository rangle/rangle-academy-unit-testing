// IRL I get data from a DB or some external system.
export class DB {
  /**
   * Return data format:
   * [ { id: 'some-uid', name: "Miles Davis" }, ... ]
   */
  getArtists() {
    this._blowup();
  }

  /**
   * Return data format:
   * [ { id: 'some-uid', artistId: 'some-artist-uid', title: 'Birth of Cool' }, ... ]
   */
  getAlbums() {
    this._blowup();
  }

  /**
   * Return data format:
   * [
   *   {
   *     id: 'some-uid',
   *     artistId: 'some-artist-uid',
   *     albumId: 'some-album-uid',
   *     title='So What'
   *   },
   *  ... ]
   */
  getTracks() {
    this._blowup();
  }

  _blowup() {
    throw new Error("I am an external thing that will blow up during testing.");
  }
}