import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FARMACO';
  ngOnInit() {
    (function(d, m){
        var kommunicateSettings = {"appId":"26bb66afd24526f7cde98acca84119f2b","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }
}
