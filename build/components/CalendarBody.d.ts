import dayjs from 'dayjs';
import { ViewStyle } from 'react-native';
import { EventCellStyle, EventRenderer, HorizontalDirection, ICalendarEvent } from '../interfaces';
interface CalendarBodyProps<T> {
    cellHeight: number;
    containerHeight: number;
    dateRange: dayjs.Dayjs[];
    events: ICalendarEvent<T>[];
    scrollOffsetMinutes: number;
    ampm: boolean;
    showTime: boolean;
    style: ViewStyle;
    eventCellStyle?: EventCellStyle<T>;
    hideNowIndicator?: boolean;
    overlapOffset?: number;
    onPressCell?: (date: Date) => void;
    onPressEvent?: (event: ICalendarEvent<T>) => void;
    onSwipeHorizontal?: (d: HorizontalDirection) => void;
    renderEvent?: EventRenderer<T>;
}
declare function _CalendarBody<T>({ containerHeight, cellHeight, dateRange, style, onPressCell, events, onPressEvent, eventCellStyle, ampm, showTime, scrollOffsetMinutes, onSwipeHorizontal, hideNowIndicator, overlapOffset, renderEvent, }: CalendarBodyProps<T>): JSX.Element;
export declare const CalendarBody: typeof _CalendarBody;
export {};
