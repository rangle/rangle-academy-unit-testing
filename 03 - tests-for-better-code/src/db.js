// IRL I get data from a DB or some external system.
export class DB {
  getArtists() {
    throw new Error("I am en external thing that will blow up during testing.");
  }

  getAlbums() {
    throw new Error("I am en external thing that will blow up during testing.");
  }

  getTracks() {
    throw new Error("I am en external thing that will blow up during testing.");
  }
}
