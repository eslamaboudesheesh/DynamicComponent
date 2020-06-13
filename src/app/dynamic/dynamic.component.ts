import { Component, OnInit ,ViewContainerRef,ComponentFactoryResolver, Input,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  public gridData = []
  public gridField = []

  public childgridData = []
  public childgridField = []
  public UserId :any;
  @Input() set componentData(data: {component: any, gridField: any }) {
    if (!data) {
      return;
    }

    this.gridData = data.component
    this.gridField = data.gridField
  }  


  @Input() set ChildData(data: {component: any, gridField: any ,userId:any}) {
    if (!data) {
      return;
    }
    this.childgridData = data.component
    this.childgridField = data.gridField
    this.UserId = data.userId

  }  

  @Output()update = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  Update(dataItem,rowIndex) {
    if(dataItem.userId == this.UserId){
      alert(`it's the same  user Id ${this.UserId} every user have 10 posts `)
    }
    this.update.emit({dataItem,rowIndex});

  }
}
