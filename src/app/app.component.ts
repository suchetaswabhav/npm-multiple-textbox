import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'multiple-textbox';

  submitButton = "true"

  ngOnInit(){
    this.buttonName(name);

  }
  finalResponse(e)
  {

    console.log("e = ", e)
  }

  buttonName(name3){
    document.getElementById("objectStyle").innerHTML = name3
  }
}
