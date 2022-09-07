import { Component } from '@angular/core';
import {
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscEventcalendarView,
  setOptions
} from '@mobiscroll/angular';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  view: MbscEventcalendarView = {
    timeline: {
      type: 'day',
      timeCellStep: 1440,
      timeLabelStep: 1440,
      size: 7,
    },
  };
  calendarOptions: MbscEventcalendarOptions = {
    dataTimezone: 'utc',
    displayTimezone: 'utc',
    clickToCreate: false,
    dragToCreate: false,
    externalDrop: true,
    dragToMove: true,
    dragToResize: false,
  };

  myEvents: MbscCalendarEvent[] = [
    {
      id: '1',
      title: 'Overlapping Event 1',
      tooltip: 'Overlapping Event 1',
      start: '2022-09-08T11:13:00.000',
      end: '2022-09-08T13:54:00.000',
      color: '#119100',
      resource: ['res1', '1', '777'],
      editable: false,
    },
    {
      id: '2',
      title: 'Overlapping Event 2',
      tooltip: 'Overlapping Event 2',
      start: '2022-09-07T20:16:00.000',
      end: '2022-09-08T04:00:00.000',
      color: '#119100',
      resource: ['res1', '1'],
      editable: false,
    },
    {
      id: '3',
      title: 'Overlapping Event 3',
      tooltip: 'Overlapping Event 3',
      start: '2022-09-08T04:30:00+00:00',
      end: '2022-09-010T21:00:00+00:00',
      color: '#119100',
      resource: ['res1', '1'],
      editable: false,
    },
    {
      id: '4',
      title: 'Overlapping Event 4',
      tooltip: 'Overlapping Event 4',
      start: '2022-09-07T17:23:00.000',
      end: '2022-09-011T10:40:00.000',
      color: '#119100',
      resource: ['res1', '1', '777'],
      editable: false,
    },
  ];

  myResources = [
    {
      id: 'gro1',
      name: 'Group 1',
      children: [
        {
          id: 'res1',
          driver: '1',
          truck: '777',
          trailer: 'R180',
        },
      ],
    },
  ];
}
