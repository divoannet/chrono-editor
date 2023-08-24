import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const COL_NAMES = {
  characters: 'Персонажи',
  date: 'Дата',
  order: 'Порядок',
  status: 'Статус',
  tags: 'Тэги',
  text: 'Краткое описание',
  title: 'Название',
  url: 'Url',
  visibleDate: 'Видимая дата',
};

const COL_TIPS = {
  date: 'Всегда в формате DD.MM.YYYY, по ней происходит сортировка',
  visibleDate: 'Подставляется вместо даты, если нужно нечто неформатное, вроде "2 года назад"'
}

@Component({
  selector: 'chrono-table',
  templateUrl: './chrono-table.component.html',
  styleUrls: ['./chrono-table.component.css']
})
export class ChronoTableComponent implements OnInit {
  @Input() forumName: string = '';
  data = [];
  columnNames = [];

  constructor(private http: HttpClient){}

  ngOnInit() {
    if (!this.forumName) return;

    this.http.get(`https://localhost:8080/?key=${this.forumName}`).subscribe({
      next: data => {
        this.data = Array.isArray(data) ? data : [];
        this.columnNames = (Array.isArray(data) && data.length) ? Object.keys(data[0]) : [];
      }
    })
  }

  getColName(columnName: string): string {
    return COL_NAMES[columnName] || columnName;
  }

  getTips(columnName: string): string | null {
    return COL_TIPS[columnName] || null;
  }
}
