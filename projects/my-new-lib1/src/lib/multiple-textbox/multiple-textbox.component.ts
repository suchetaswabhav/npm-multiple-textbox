import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-multiple-textbox',
  templateUrl: './multiple-textbox.component.html',
  styleUrls: ['./multiple-textbox.component.css']
})
export class MultipleTextboxComponent implements OnInit {
  @Output() response: EventEmitter<any> = new EventEmitter();
  //textboxes
  @Output() name: EventEmitter<any> = new EventEmitter();
  @Output() add: EventEmitter<any> = new EventEmitter();
  @Output() subtract: EventEmitter<any> = new EventEmitter();

  passHeaderUrl: boolean = false;
  selectedName = [];
  containers = [];
  addContainer: boolean = false;
  addMore: boolean = true;
  clickAgain: boolean = true;
  firstApiMining: any;
  miningname: any
  showButton: boolean = true;
  status: boolean = false;
  //  submitButton = "abc"

  buttonStyle
  constructor() { }

  ngOnInit() {

    var abc = "abc"
    this.buttonName(abc);
    
  }



  //-----------  Text Boxes Functions  ------------


  addOne(firstApiMining) {
    this.addContainer = true;

    this.addMore = true;
    this.clickAgain = false;
    this.containers.push(this.containers.length);
    this.selectedName.push(firstApiMining);
  }


  addOneMore(moreAPIName) {

    this.addContainer = true;
    this.addMore = true;
    this.containers.push(this.containers.length);
    this.selectedName.push(moreAPIName);
  }


  deleteOneMore(index) {

    this.containers.splice(index, 1);
    if (this.containers.length == 0) {
      this.clickAgain = true;
      this.selectedName.splice(index, 0);

      //this.resetGraphs();
    }
    this.selectedName.splice(index + 1, 1);
  }

  textChanged(event) {

    this.firstApiMining = event;
    this.selectedName.splice(0, 1, event);

  }

  textChangedMore(eventMore, indexMore) {

    this.selectedName.splice(indexMore + 1, 1, eventMore);
  }

  finalResponse() {

    this.response.emit(this.selectedName)
  }


  buttonName(name1) {

    document.getElementById("objectStyle").innerHTML = name1;
    var doc = document.getElementById("objectStyle").innerHTML
    console.log("doc = ", doc)
    this.name.emit(doc)
  }
}

