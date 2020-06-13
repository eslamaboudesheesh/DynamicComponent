import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core'
import { DynamicComponent } from '../dynamic/dynamic.component'
import { title } from 'process'
import { PlaceholderService } from '../services/placeholder.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  public products: any


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
      name: 'body',
      title: 'body',
      field: 'body',
      width: 180,
    },
    {
      name: 'option',
      title: 'option',
      field: 'option',
      width: 180,
    },
  ]

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
  ]
  public resolver: any
  public componentRef: any
  constructor(
    private vf: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private placeholder: PlaceholderService,
  ) {}

  ngOnInit(): void {
    this.resolver = this.componentFactoryResolver.resolveComponentFactory(
      DynamicComponent,
    )
    this.componentRef = this.vf.createComponent(this.resolver)
    this.add()
  }

  add() {
    this.placeholder.GetUser().subscribe((e) => {
      if (e) {
        this.products = e
        this.componentRef.instance.componentData = {
          component: this.products,
          gridField: this.gridColumn,
        }

        this.componentRef.instance.update.subscribe((value: any) => {
          this.onChildValueChange(value)
        })
      }
    })
  }

  onChildValueChange(value) {
    let id = value.dataItem.userId
    this.placeholder.GetPersonInfo(id).subscribe((e) => {
      this.products
      if (e) {
        this.componentRef.instance.ChildData = {
          component: e,
          gridField: this.ChildgridColumn,
          userId: id,
        }
      }
    })
  }
}
