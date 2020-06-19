import {
  Component,
  OnInit,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';
import { PlaceholderService } from '../services/placeholder.service';
import { DynamicComponent } from '../dynamicGrid/dynamic.component';
import { FormGroup, FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-childsecond',
  templateUrl: './childsecond.component.html',
  styleUrls: ['./childsecond.component.css'],
})
export class ChildsecondComponent implements OnInit {
  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }
  ];



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
  ) {

 
  
  }

  ngOnInit(): void {

    setTimeout(() => {
      this.createComponent();
      this.add();
      this.form = new FormGroup({
        fields: new FormControl(JSON.stringify(this.fields))
      })
    }, 0);
  }

  getFields() {
    debugger
    return this.fields;
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
  onSubmit(form:Form){
    console.log(form);
  }
}
