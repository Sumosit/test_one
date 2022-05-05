import {NgModule} from "@angular/core";
import * as component from './index';
import {LayoutRouterModule} from "@layout/layout-router.module";
import {SharedModule} from "@shared/shared.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    component.FinancialToolsComponent,

    component.ToolComponent,
    component.ToolSpecificationsComponent,
    component.ToolBiddingComponent,

    component.ListOfIssuersComponent,

    component.ListOfMembersComponent,
    component.ActivityRankingComponent,
    component.DiplomaWinnersOfNominationsComponent,
    component.ListOfKaseMembersComponent
  ],
  imports: [
    LayoutRouterModule,
    SharedModule,
    CommonModule,
    FormsModule
  ]
})
export class LayoutModule {}
