import { Component, OnInit } from '@angular/core';
import { TileService } from "./tile.service";
import { Tile } from "./tile";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TileService]
})
export class AppComponent implements OnInit {
  title = 'NG2-Memory Game';
  tiles: Tile[];

  constructor(private tileService: TileService) {}

  ngOnInit(): void {
    this.tiles = this.tileService.getTiles();
  }
}
