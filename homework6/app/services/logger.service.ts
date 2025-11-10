import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

logMsg(msg: string){
  let date = new Date();
  console.log(`${date} ${msg}`);

}
}