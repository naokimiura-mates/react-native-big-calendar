import dayjs from 'dayjs';
import { ViewStyle } from 'react-native';
import { ICalendarEvent } from '../interfaces';
export interface CalendarHeaderProps<T> {
    dateRange: dayjs.Dayjs[];
    cellHeight: number;
    style: ViewStyle;
    allDayEvents: ICalendarEvent<T>[];
    onPressDateHeader?: (date: Date) => void;
}
declare function _CalendarHeader<T>({ dateRange, cellHeight, style, allDayEvents, onPressDateHeader, }: CalendarHeaderProps<T>): JSX.Element;
export declare const CalendarHeader: typeof _CalendarHeader;
export {};
