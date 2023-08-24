import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChronoTableComponent } from './components/chrono-table/chrono-table.component';
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, MatTableModule, MatIconModule],
  declarations: [ AppComponent, ChronoTableComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule{}
