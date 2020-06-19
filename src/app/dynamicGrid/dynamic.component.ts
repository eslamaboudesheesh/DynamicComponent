import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { process, State } from '@progress/kendo-data-query';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css'],
})
export class DynamicComponent implements OnInit {
  public gridData: any;
  public gridDataResult: any;
  public gridField = [];
  public gridWithoutData: boolean = false;

  public childgridData = [];
  public childgridField = [];
  public UserId: any;
  public state: State = {
    skip: 0,
    take: 10,
  };
  @Input() set componentData(data: { component: any; gridField: any }) {
    if (!data) {
      return;
    }
    this.gridDataResult = data.component;
    this.gridField = data.gridField;
    this.loadItem(this.gridDataResult);
  }

  @Input() set ChildData(data: {
    component: any;
    gridField: any;
    userId: any;
  }) {
    if (!data) {
      return;
    }
    this.childgridData = data.component;
    this.childgridField = data.gridField;
    this.UserId = data.userId;
  }

  @Output() update = new EventEmitter();
  @Output() onFilter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  loadItem(gridDataRequest: any) {
    this.gridData = process(gridDataRequest, this.state);
    if (this.gridData) {
      this.gridWithoutData = true;
    }
  }

  dataStateChange(state: State) {
    this.state = state;
    var result = process(this.gridDataResult, this.state);
    this.gridData = result;
  }

  ShowAction(dataItem, rowIndex) {
    if (dataItem.userId == this.UserId) {
      alert(`it's the same  user Id ${this.UserId} every user have 10 posts `);
    }
    this.update.emit({ dataItem, rowIndex });
  }

  onFilterForGrid(inputValue: string): void {
    if (inputValue.length == 0) {
      this.loadItem(this.gridDataResult);
    }
    let result = process(this.gridDataResult, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: this.gridField[1].field,
            operator: 'contains',
            value: inputValue,
          },
          {
            field: this.gridField[2].field,
            operator: 'contains',
            value: inputValue,
          },
        ],
      },
    }).data;
    this.gridData = result;
    this.state.skip = 0;
    this.state.take = 10;
  }
}
