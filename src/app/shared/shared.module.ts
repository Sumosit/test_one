import {NgModule} from "@angular/core";
import * as component from './index';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MatMenuModule} from "@angular/material/menu";
import { HeaderMenuBigComponent } from './components/header-menu-big/header-menu-big.component';

const components : any = [
  component.PathTreeComponent,
  component.TableComponent,
  component.ActualInformationComponent,
  component.FilterButtonComponent,
  component.PaperInfoComponent,
  component.PaperShortInfoComponent,
  component.TabsComponent,
  component.ProspectusComponent,
  component.TabsSecComponent,
  component.TableNewsComponent,
  component.SvgIconComponent,
  component.TradingviewComponent,
  component.TableIconsComponent,
  component.HeaderMenuSmallComponent
]
@NgModule({
  declarations: [
    ...components,
    HeaderMenuBigComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatMenuModule
    ],
    exports: [
        ...components,
        HeaderMenuBigComponent,
    ]
})
export class SharedModule {}
