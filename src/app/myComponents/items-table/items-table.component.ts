import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.css']
})
export class ItemsTableComponent implements OnInit {
dataInfo:any=[
  {
    'substation':'Google data center',
    'assetsType':'Transformer',
    'assetName':'TX_01',
    'alarmName':'Top Oil Temp',
    'realTime':'80',
    'unit':'0C',
    'triggerTime':'15/5/21 8:20 PM ',
    'ackBy':'Michael Boran'
  },
  {
    'substation':'Indonesia power',
    'assetsType':'GIS',
    'assetName' : 'GIS_01',
    'alarmName':'Bottom Temp',
    'realTime':'56',
    'unit':'0C',
    'triggerTime':'16/5/21 5:20 PM ',
    'ackBy':'Tom'
  },
  {
    'substation':'El Paso',
    'assetsType':'Cable',
    'assetName' : 'CA_01',
    'alarmName':'Joint Temp',
    'realTime':'58',
    'unit':'0C',
    'triggerTime':'16/5/21 7:10 PM ',
    'ackBy':'Jerry'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
