import dayjs from 'dayjs';
import { ViewStyle } from 'react-native';
import { EventCellStyle, EventRenderer, HorizontalDirection, ICalendarEvent, WeekNum } from '../interfaces';
interface CalendarBodyForMonthViewProps<T> {
    containerHeight: number;
    targetDate: dayjs.Dayjs;
    events: ICalendarEvent<T>[];
    style: ViewStyle;
    eventCellStyle?: EventCellStyle<T>;
    hideNowIndicator?: boolean;
    onPressCell?: (date: Date) => void;
    onPressEvent?: (event: ICalendarEvent<T>) => void;
    onSwipeHorizontal?: (d: HorizontalDirection) => void;
    renderEvent?: EventRenderer<T>;
    maxVisibleEventCount: number;
    weekStartsOn: WeekNum;
}
declare function _CalendarBodyForMonthView<T>({ containerHeight, targetDate, style, onPressCell, events, onPressEvent, eventCellStyle, onSwipeHorizontal, hideNowIndicator, renderEvent, maxVisibleEventCount, weekStartsOn, }: CalendarBodyForMonthViewProps<T>): JSX.Element;
export declare const CalendarBodyForMonthView: typeof _CalendarBodyForMonthView;
export {};
