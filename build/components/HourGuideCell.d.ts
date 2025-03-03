import dayjs from 'dayjs';
interface HourGuideCellProps {
    cellHeight: number;
    onPress: (d: dayjs.Dayjs) => void;
    date: dayjs.Dayjs;
    hour: number;
}
export declare const HourGuideCell: ({ cellHeight, onPress, date, hour }: HourGuideCellProps) => JSX.Element;
export {};
