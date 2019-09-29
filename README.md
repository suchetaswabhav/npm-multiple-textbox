# MultipleTextbox

This project was generated with [Angular CLI] version 8.3.6.

The module integrates textboxes which can be added or subtracted and this can be done randomly also.

# How to include this module in my Application -

**app.module.ts**
  ```  
  import { MyLibModule } from './../../projects/my-new-lib1/src/lib/my-lib.module'

     @NgModule({
      declarations: [
         AppComponent
       ],
  imports: [
    BrowserModule,
    AppRoutingModule , MyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
**app.component.ts**

Here the buttonName(name) method includes a name argument which name needs to be given from the UI. It will be the name of the result button.

```
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

  buttonName(name){
    document.getElementById("objectStyle").innerHTML = name
  }
  ```
  **app.component.html**
  
  ```
<lib-multiple-textbox (response) = "finalResponse($event)"  (name)="buttonName('buttonName')"> </lib-multiple-textbox>
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
