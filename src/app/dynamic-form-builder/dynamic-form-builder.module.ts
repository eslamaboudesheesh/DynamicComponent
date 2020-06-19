import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './widget/textBox';
import { CheckBoxComponent } from './widget/checkbox';
import { DropDownComponent } from './widget/dropdown';



@NgModule({
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    CheckBoxComponent,
    DropDownComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [DynamicFormBuilderComponent],

})
export class DynamicFormBuilderModule { }
