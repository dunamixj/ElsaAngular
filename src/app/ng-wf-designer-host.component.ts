import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "ng-wf-designer-host",
  template: `
    <wf-designer-host
      #wfhost
      id="designerHost"
      canvas-height="300vh"
      [attr.data-activity-definitions]="activityDefinition"
      [attr.data-workflow]="workflowModel"
    >
    </wf-designer-host>
  `
})
export class NGWFDesignerHostComponent
  implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  public activityDefinition;
  @Input()
  public workflowModel;
  @Output()
  public workflowModelChange = new EventEmitter();
  @ViewChild("wfhost")
  public wfhost: any;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.wfhost.nativeElement.addEventListener("workflowChanged", e =>
      this.workflowChange(e)
    );
  }

  ngOnDestroy() {
    this.wfhost.nativeElement.removeEventListener("workflowChanged");
  }

  workflowChange(event) {
    this.workflowModelChange.emit(event.detail);
  }
}
