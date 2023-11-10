import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { WorkflowService } from "./workflow.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Elsa designer";
  activityDefinition = "{}";
  workflowModel = "{}";
  dataAvailable = false;

  constructor(http: HttpClient, private workflowService: WorkflowService) {}

  ngOnInit() {
    this.workflowService.getWorkflow().subscribe(
      result => {
        var activities = JSON.stringify(result.activity);
        var workflow = JSON.stringify(result.workflow);
        this.activityDefinition = activities;
        this.workflowModel = workflow;
        this.dataAvailable = true;
      },
      error => console.error(error)
    );
  }
}
