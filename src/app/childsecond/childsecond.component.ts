import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';
import { PlaceholderService } from '../services/placeholder.service';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-childsecond',
  templateUrl: './childsecond.component.html',
  styleUrls: ['./childsecond.component.css'],
})
export class ChildsecondComponent implements OnInit {
  public products: any;

  @ViewChild('dynamicComponent', { read: ViewContainerRef })
  entry: ViewContainerRef;

  public gridColumn = [
    {
      name: 'id',
      title: 'id',
      field: 'id',
      width: 30,
    },
    {
      name: 'title',
      title: 'title',
      field: 'title',
      width: 180,
    },
    {
      name: 'option',
      title: 'option',
      field: 'option',
      width: 180,
    },
  ];

  public ChildgridColumn = [
    {
      name: 'id',
      title: 'id',
      field: 'id',
      width: 30,
    },
    {
      name: 'title',
      title: 'title',
      field: 'title',
      width: 180,
    },
    {
      name: 'body',
      title: 'body',
      field: 'body',
      width: 180,
    },
  ];
  public resolver: any;
  public componentRef: any;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private placeholder: PlaceholderService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.createComponent();
      this.add();
    }, 0);
  }

  createComponent() {
    this.resolver = this.componentFactoryResolver.resolveComponentFactory(
      DynamicComponent
    );
    this.componentRef = this.entry.createComponent(this.resolver);
  }
  add() {
    this.placeholder.GetUser().subscribe((e) => {
      if (e) {
        this.products = e;
        this.componentRef.instance.componentData = {
          component: this.products,
          gridField: this.gridColumn,
        };

        this.componentRef.instance.update.subscribe((value: any) => {
          this.onChildValueChange(value);
        });
      }
    });
  }

  onChildValueChange(value) {
    let id = value.dataItem.userId;
    this.placeholder.GetPersonInfo(id).subscribe((e) => {
      this.products;
      if (e) {
        this.componentRef.instance.ChildData = {
          component: e,
          gridField: this.ChildgridColumn,
          userId: id,
        };
      }
    });
  }
}
