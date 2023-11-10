import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { WorkflowService } from "./workflow.service";
import { NGWFDesignerHostComponent } from "./ng-wf-designer-host.component";

@NgModule({
  declarations: [AppComponent, NGWFDesignerHostComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [WorkflowService]
})
export class AppModule {}
