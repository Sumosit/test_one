import {AfterViewInit, Component, OnInit} from '@angular/core';
import {createChart} from "lightweight-charts";

@Component({
  selector: 'app-tradingview',
  templateUrl: './tradingview.component.html',
  styleUrls: ['./tradingview.component.scss']
})
export class TradingviewComponent implements OnInit, AfterViewInit {

  public chart: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.chart.remove();
    this.chart = createChart(document.getElementById("tradingview")!, {
      width: document.getElementById('main')!?.offsetWidth - 150,
      height: 400,
      timeScale: {
        fixLeftEdge: true,
        fixRightEdge: true
      },
      crosshair: {
        mode: 1,
        vertLine: {
          width: 2,
          style: 3,
          labelVisible: true
        },
        horzLine: {
          width: 2,
          style: 3,
          labelVisible: true
        }
      },
      grid: {
        vertLines: {
          visible: true
        },
        horzLines: {
          visible: true
        }
      },
      watermark: {
        color: 'rgba(11, 94, 29, 0.4)',
        visible: true,
        text: 'TradingView Watermark Example',
        fontSize: 24,
        horzAlign: 'left',
        vertAlign: 'bottom',
      },
      handleScroll: {
        mouseWheel: true,
        pressedMouseMove: true,
        horzTouchDrag: true,
        vertTouchDrag: true,
      },
      layout: {backgroundColor: 'rgba(0,0,0,0)', textColor: '#000000'},
    });
    const lineSeries = this.chart.addLineSeries({});
    lineSeries.setData([
      {time: '2019-04-11', value: 80.01},
      {time: '2019-04-12', value: 96.63},
      {time: '2019-04-13', value: 76.64},
      {time: '2019-04-14', value: 81.89},
      {time: '2019-04-15', value: 74.43},
      {time: '2019-04-16', value: 80.01},
      {time: '2019-04-17', value: 96.63},
      {time: '2019-04-18', value: 76.64},
      {time: '2019-04-19', value: 81.89},
      {time: '2019-04-20', value: 74.43},
    ]);
    lineSeries.setMarkers([
      {
        time: '2019-04-09',
        position: 'aboveBar',
        color: 'black',
        shape: 'arrowDown',
      },
      {
        time: '2019-05-31',
        position: 'belowBar',
        color: 'red',
        shape: 'arrowUp',
        id: 'id3',
      },
      {
        time: '2019-05-31',
        position: 'belowBar',
        color: 'orange',
        shape: 'arrowUp',
        id: 'id4',
        text: 'example',
        size: 2,
      },
    ])
    lineSeries.applyOptions({})
  }
}
