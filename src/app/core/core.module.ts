import {NgModule} from "@angular/core";
import * as component from './index';
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import {SharedModule} from "@shared/shared.module";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    component.FooterComponent,
    component.HeaderComponent,
    component.PageComponent
  ],
    imports: [
      MatDialogModule,
        RouterModule,
        SharedModule,
        MatMenuModule,
        CommonModule
    ]
})
export class CoreModule {}
