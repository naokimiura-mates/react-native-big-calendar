import { CalendarTouchableOpacityProps, ICalendarEvent } from '../interfaces';
interface DefaultCalendarEventRendererProps<T> {
    touchableOpacityProps: CalendarTouchableOpacityProps;
    event: ICalendarEvent<T>;
    showTime?: boolean;
    textColor: string;
    ampm: boolean;
}
export declare function DefaultCalendarEventRenderer<T>({ touchableOpacityProps, event, showTime, textColor, ampm, }: DefaultCalendarEventRendererProps<T>): JSX.Element;
export {};
