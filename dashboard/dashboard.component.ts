import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public showsList;
  public totalShowsList = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllShows();
  }
  getAllShows() {

    this.dataService.getShowsList()
      .subscribe(
        resp => {
          this.showsList = resp;
          this.generateShowsList();
        },
      );
  }
  generateShowsList() {
    const totalGenres = this.getAllGenres();
    totalGenres.forEach( genre => {
      this.totalShowsList.push({genre});
    });
    this.totalShowsList.forEach(item => {
      const data = [];
      this.showsList.forEach( obj => {
      obj.genres.forEach( genre => {
          if (genre === item.genre) {
            data.push(obj);
          }
          const details = 'details';
          item[details] = data;
      });
      });
      item.details.sort((a, b) => (b.rating.average > a.rating.average) ? 1 : -1);
    });
  }
  getAllGenres() {
    const genresList = [];
    this.showsList.forEach(obj => {
      genresList.push(obj.genres);
    });
    const allGenres = (arr) => {
      return [...new Set([].concat(...arr))];
    };
    return allGenres(genresList);
  }
}
