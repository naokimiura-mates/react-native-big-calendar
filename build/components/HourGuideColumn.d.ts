import * as React from 'react';
interface HourGuideColumnProps {
    cellHeight: number;
    hour: number;
    ampm: boolean;
}
export declare const HourGuideColumn: React.MemoExoticComponent<({ cellHeight, hour, ampm }: HourGuideColumnProps) => JSX.Element>;
export {};
