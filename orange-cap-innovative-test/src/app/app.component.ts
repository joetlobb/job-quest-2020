import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'orange-cap-innovative-test';
  jokes = [''];
  jokesCount = 1;
  jokesArray = new Subject<string[]>();
  hideButtons = false;
  hideJokesButtons = true;

  constructor(private http: HttpClient) { }

ngOnInit() {
  this.jokesArray.subscribe();
}

  getJoke() {
    const jokesLength = this.jokes.length;
    if (jokesLength > 1) {
      this.jokes.splice(1, jokesLength - 1);
      this.jokes[0] = '';
    }
    this.http.get<
      {
        type: string,
        value: {
          categories: [],
          id: number,
          joke: string;
        }
      }>("http://api.icndb.com/jokes/random").subscribe(data => {
        this.jokes[0] = data.value.joke;
      });
      this.hideButtons = false;
      this.hideJokesButtons = true; 
  }

  getJokes() {
    this.jokes = [];
    this.jokes[0] = "How many jokes?";
    this.hideButtons = false;
    this.hideJokesButtons = false;
  }

  numOfJokes(numOfJokes: number) {
    this.jokesCount = numOfJokes;
    const api = "http://api.icndb.com/jokes/random/" + this.jokesCount;
    if (this.jokes[0] === "How many jokes?") {
      this.jokes.splice(0, 1);
      this.http.get<
        {
          type: string,
          value: [
            {
              categories: [],
              id: number,
              joke: string;
            }
          ]
        }>(api).subscribe(data => {
          for (let i = 0; i < this.jokesCount; i++) {
            const jokesArray = data.value[i];
            this.jokes.push(jokesArray.joke);
          }
          this.jokesArray.next(this.jokes);
          this.hideButtons = true;
          this.jokesCount = 1;
        });
      } else {
        return;
      }
  }
}
