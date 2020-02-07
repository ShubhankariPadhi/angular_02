import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {FormsModule} from '@angular/forms';
import {NesteddirectoryComponent} from '../nesteddirectory/nesteddirectory.component';
import {InsidenesteddirectoryComponent} from '../nesteddirectory/insidenesteddirectory/insidenesteddirectory.component';
import {ParentComponent} from '../getDatafromsiblingUsingSrvc/getDatafromsiblingUsingSrvc.component';
import {SiblingComponent} from '../siblingDir/siblingDir.component';
import { DataService } from './app.service';
import {ParentComponentComponent} from '../parent-component/parent-component.component';
import {ChildComponentComponent} from '../parent-component/child-component/child-component.component';
import {CustomerComponent} from '../company/customer/customer.component';
import {EmployeeCompComponent} from '../company/employee-comp/employee-comp.component';
import {StudentComponent} from '../school/student/student.component';
import {SchoolComponent} from '../school/school.component';
import {SeaComponent} from '../sea/sea.component';
import {RiverComponent} from '../sea/river/river.component';
import {UnreleatedToSchoolComponent} from '../sea/unreleated-to-school/unreleated-to-school.component';
import {UnreleatedToSeaComponent} from '../school/unreleated-to-sea/unreleated-to-sea.component';
import {DataSharingServiceService} from '../data-sharing-service.service';
import {ParentServiceComponent} from '../parent-service/parent-service.component';
import {SiblingServiceComponent} from '../sibling-service/sibling-service.component';
import {ServicesService} from '../cart/services.service';
import {CartComponent} from '../cart/cart.component';
import {ProductDetailsComponent} from '../product-details/product-details.component';
import {DirectivesCompComponent} from '../directives-comp/directives-comp.component';
import {PipeCompComponent} from '../pipe-comp/pipe-comp.component';
import {SqrtPipe} from './sqrt';

@NgModule({
  declarations: [
    EmployeeComponent,
    AppComponent,
    NesteddirectoryComponent,
    InsidenesteddirectoryComponent,
    ParentComponent,
    SiblingComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    CustomerComponent,
    EmployeeCompComponent,
    StudentComponent,
    SchoolComponent,
    RiverComponent,
    SeaComponent,
    UnreleatedToSchoolComponent,
    UnreleatedToSeaComponent,
    ParentServiceComponent,
    SiblingServiceComponent,
    ProductDetailsComponent,
    CartComponent,
    DirectivesCompComponent,
    PipeCompComponent,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,


  ],
  providers: [DataService, DataSharingServiceService, ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
