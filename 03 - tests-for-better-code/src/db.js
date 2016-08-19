// IRL I get data from a DB or some external system.
export class DB {
  getArtists() {
    this._blowup();
  }

  getAlbums() {
    this._blowup();
  }

  getTracks() {
    this._blowup();
  }

  _blowup() {
    throw new Error("I am an external thing that will blow up during testing.");
  }
}
