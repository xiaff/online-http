import { Component } from '@angular/core';
import { HttpService } from './service/common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online HTTP Toolkits for Everyone';
  url = '';
  content = '';

  constructor(private httpService: HttpService) {
    this.content = '{"id": 0,"name": "string","org": "string"}';
  }
  onSend() {
    console.log("on send.");
    console.log("url:", this.url);
    if (this.url == '') {
      return;
    }
    this.httpService.getResponse(this.url)
      .then(data => {this.content = JSON.stringify(data, null, 2); })
      .catch(data => this.content = JSON.stringify(data, null, 2));
  }
}
