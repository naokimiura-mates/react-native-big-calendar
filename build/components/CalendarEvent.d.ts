import { EventCellStyle, EventRenderer, ICalendarEvent } from '../interfaces';
interface CalendarEventProps<T> {
    event: ICalendarEvent<T>;
    onPressEvent?: (event: ICalendarEvent<T>) => void;
    eventCellStyle?: EventCellStyle<T>;
    showTime: boolean;
    eventCount?: number;
    eventOrder?: number;
    overlapOffset?: number;
    renderEvent?: EventRenderer<T>;
    ampm: boolean;
}
declare function _CalendarEvent<T>({ event, onPressEvent, eventCellStyle, showTime, eventCount, eventOrder, overlapOffset, renderEvent, ampm, }: CalendarEventProps<T>): JSX.Element;
export declare const CalendarEvent: typeof _CalendarEvent;
export {};
