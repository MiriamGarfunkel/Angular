import { Component, OnInit, } from '@angular/core';
import { LoggerService } from './services/logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class App implements OnInit {
constructor(public logger: LoggerService){}

    ngOnInit(): void {
    this.logger.logMsg("app ngOnInit")
  }
 
  delete(){
  this.logger.logMsg("deleted")
  }
    add(){
  this.logger.logMsg("add")
  }
    change(){
  this.logger.logMsg("change")
  }
}
