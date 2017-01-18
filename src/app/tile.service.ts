import {Injectable} from '@angular/core';
import {Tile} from "./tile";

const TILES: Tile[] = [
  {
    name: "bomb",
    flipped: false,
    icon: "bomb"
  },
  {
    name: "bath",
    flipped: false,
    icon: "bath"
  },
  {
    name: "shower",
    flipped: false,
    icon: "shower"
  },
  {
    name: "balance-scale",
    flipped: false,
    icon: "balance-scale"
  },
  {
    name: "briefcase",
    flipped: false,
    icon: "briefcase"
  },
  {
    name: "book",
    flipped: false,
    icon: "book"
  },
  {
    name: "cubes",
    flipped: false,
    icon: "cubes"
  },
  {
    name: "flash",
    flipped: false,
    icon: "flash"
  }
];

@Injectable()
export class TileService {

  constructor() {
  }

  shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

  /**
   * Get all tile elements.
   */
  getTiles(): Tile[] {
    // we need to clone the items to get two items of each image.
    TILES.map((item) => {
      return TILES.push(item);
    });

    return this.shuffle(TILES);
  }

}
