import dayjs from 'dayjs';
import { EventCellStyle, EventRenderer, ICalendarEvent } from '../interfaces';
interface CalendarEventProps<T> {
    event: ICalendarEvent<T>;
    onPressEvent?: (event: ICalendarEvent<T>) => void;
    eventCellStyle?: EventCellStyle<T>;
    renderEvent?: EventRenderer<T>;
    date: dayjs.Dayjs;
    dayOfTheWeek: number;
    calendarWidth: number;
    isRTL: boolean;
}
declare function _CalendarEventForMonthView<T>({ event, onPressEvent, eventCellStyle, renderEvent, date, dayOfTheWeek, calendarWidth, isRTL, }: CalendarEventProps<T>): JSX.Element;
export declare const CalendarEventForMonthView: typeof _CalendarEventForMonthView;
export {};
