import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {StompSubscription, CompatClient} from '@stomp/stompjs'
import {ToolSpecificationsInterface} from "@shared/interfaces/tool-specifications-interface";
import {StompClientService} from "@shared/services/stomp-client.service";

@Component({
  selector: 'app-tool-specifications',
  templateUrl: './tool-specifications.component.html',
  styleUrls: ['./tool-specifications.component.scss']
})
export class ToolSpecificationsComponent implements OnInit, OnDestroy {

  @Input() code: string = '';

  private stompClient: CompatClient | undefined;

  private subscriptionToolSpecifications: StompSubscription | any;
  public toolSpecifications: ToolSpecificationsInterface | any;

  constructor(public stompClientService: StompClientService) {}

  ngOnInit(): void {
    this.stompClient = this.stompClientService.getSockJs();
    this.subscribeToolSpecifications(this.stompClient);
  }

  subscribeToolSpecifications(stompClient: CompatClient) {
    const _this = this;
    stompClient.connect(
      {}, function (frame: any) {
        _this.subscriptionToolSpecifications = stompClient?.subscribe("/topic/data", tick => {
          let temp = JSON.parse(tick.body);
          _this.toolSpecifications = {
            tId: temp.tId,
            tCode: temp.tCode,
            tSecuritiesListRu: temp.tSecuritiesListRu,
            tSecuritiesListEn: temp.tSecuritiesListEn,
            tSecuritiesListKz: temp.tSecuritiesListKz,
            tTypeSecRu: temp.tTypeSecRu,
            tNin: temp.tNin,
            tInclDate: temp.tInclDate,
            tOpenTradeDate: temp.tOpenTradeDate,
            emvFullNameRu: temp.emvFullNameRu,
            emvFullNameKz: temp.emvFullNameKz,
            emvFullNameEn: temp.emvFullNameEn,
            mmOrgNameRus: temp.mmOrgNameRus,
            mmOrgNameEng: temp.mmOrgNameEng,
            mmOrgNameKaz: temp.mmOrgNameKaz,
            emsCommonAnnouncedNum: temp.emsCommonAnnouncedNum,
            emsCommonPaidUpNum: temp.emsCommonPaidUpNum,
            priceAccuracy: temp.priceAccuracy,
            cFi: temp.cFi,
            currEmission: temp.currEmission,
            nominal: temp.nominal,
            instrChangeDate: temp.instrChangeDate
          }
        })
      }
    )
  }

  ngOnDestroy() {
    this.stompClientService.disconnect();
    this.subscriptionToolSpecifications?.unsubscribe();
  }

}
