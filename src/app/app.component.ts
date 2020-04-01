import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { ResizeEvent } from 'angular-resizable-element';
import * as $ from 'jquery';

const ELEMENT_DATA = [
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
  {
    NotificationType: 'HandleDownloadProgressInfo',
    ICCID: '89445005041632000063',
    Status: 'Released',
    Eid: '89049032004008882600016698204368',
    CompletionTimeStamp: '2020-02-27T10:22:07Z',
    'NotificationEvent-NotificationPointId': '2',
    imei: '123456789012345',
    OperationStatus: 'Executed_Success',
    Created_Date: '2020-02-27T10:22:076+00:00',
    mnoid: 'Venta_Mobile',
    _V: '0',
    Type: '10T-Cloud_GlobalPlus_T01',
  },
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'css4';
  flg = true;
  test = 'test';

  public style: object = {};
  @ViewChild(MatTable, { read: ElementRef }) private matTableRef: ElementRef;

  columns: any[] = [
    { field: 'NotificationType', width: 165, },
    { field: 'ICCID', width: 150, },
    { field: 'Status', width: 55, },
    { field: 'Eid', width: 240, },
    { field: 'CompletionTimeStamp', width: 100, },
    { field: 'NotificationEvent-NotificationPointId', width: 50, },
    { field: 'imei', width: 115, },
    { field: 'OperationStatus', width: 100, },
    { field: 'Created_Date', width: 170, },
    { field: 'mnoid', width: 150, },
    { field: '_V', width: 40, },
    { field: 'Type', width: 180, }
  ];
  displayedColumns: string[] = [];
  dataSource = ELEMENT_DATA;

  pressed = false;
  currentResizeIndex: number;
  startX: number;
  startWidth: number;
  isResizingRight: boolean;
  resizableMousemove: () => void;
  resizableMouseup: () => void;

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.setDisplayedColumns();
  }

  ngAfterViewInit() {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }

  setTableResize(tableWidth: number) {
    let totWidth = 0;
    this.columns.forEach((column) => {
      totWidth += column.width;
    });
    const scale = (tableWidth - 5) / totWidth;
    this.columns.forEach((column) => {
      column.width *= scale;
      this.setColumnWidth(column);
    });
  }

  setDisplayedColumns() {
    this.columns.forEach((column, index) => {
      column.index = index;
      this.displayedColumns[index] = column.field;
    });
  }

  onResizeColumn(event: any, index: number) {
    this.checkResizing(event, index);
    this.currentResizeIndex = index;
    this.pressed = true;
    this.startX = event.pageX;
    this.startWidth = event.target.clientWidth;
    event.preventDefault();
    this.mouseMove(index);
  }

  private checkResizing(event, index) {
    const cellData = this.getCellData(index);
    if ((index === 0) || (Math.abs(event.pageX - cellData.right) < cellData.width / 2 && index !== this.columns.length - 1)) {
      this.isResizingRight = true;
    } else {
      this.isResizingRight = false;
    }
  }

  private getCellData(index: number) {
    const headerRow = this.matTableRef.nativeElement.children[0];
    const cell = headerRow.children[index];
    return cell.getBoundingClientRect();
  }

  mouseMove(index: number) {
    this.resizableMousemove = this.renderer.listen('document', 'mousemove', (event) => {
      if (this.pressed && event.buttons) {
        const dx = (this.isResizingRight) ? (event.pageX - this.startX) : (-event.pageX + this.startX);
        const width = this.startWidth + dx;
        if (this.currentResizeIndex === index && width > 50) {
          this.setColumnWidthChanges(index, width);
        }
      }
    });
    this.resizableMouseup = this.renderer.listen('document', 'mouseup', (event) => {
      if (this.pressed) {
        this.pressed = false;
        this.currentResizeIndex = -1;
        this.resizableMousemove();
        this.resizableMouseup();
      }
    });
  }

  setColumnWidthChanges(index: number, width: number) {
    const orgWidth = this.columns[index].width;
    const dx = width - orgWidth;
    if (dx !== 0) {
      const j = (this.isResizingRight) ? index + 1 : index - 1;
      const newWidth = this.columns[j].width - dx;
      if (newWidth > 50) {
        this.columns[index].width = width;
        this.setColumnWidth(this.columns[index]);
        this.columns[j].width = newWidth;
        this.setColumnWidth(this.columns[j]);
      }
    }
  }

  setColumnWidth(column: any) {
    const columnEls = Array.from(document.getElementsByClassName('mat-column-' + column.field));
    columnEls.forEach((el: HTMLDivElement) => {
      el.style.width = column.width + 'px';
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }

  validate(event: ResizeEvent): boolean {
    if (event.rectangle.height < 710 && event.rectangle.height > 40) {
      return true;
    }
    if (event.rectangle.height < 40) {
      return false;
    }
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: event.rectangle.height + 'px',
    };
  }

  addHeight() {
    $('.rectangle').css('height', '400px');
    $('#rectangle').addClass('rectangle');
    this.flg = false;
  }

  closeTroubleShooting(event: ResizeEvent) {
    $('.rectangle').css('height', '0');
    this.style = {};
  }
}
