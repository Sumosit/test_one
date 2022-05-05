import {RouterModule, Routes} from "@angular/router";
import * as component from './index';
import {NgModule} from "@angular/core";

const routes: Routes = [
  {path: '', redirectTo: 'financial-instruments', pathMatch: 'full'},
  {path: 'financial-instruments', component: component.FinancialToolsComponent},
  {path: 'tool', redirectTo: 'financial-instruments'},
  {path: 'tool/:code', component: component.ToolComponent},
  {path: 'list-of-issuers', component: component.ListOfIssuersComponent},
  {path: 'list-of-members', component: component.ListOfMembersComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouterModule {
}
