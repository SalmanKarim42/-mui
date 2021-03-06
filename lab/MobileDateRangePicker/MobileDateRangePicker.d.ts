import * as React from 'react';
import { MobileWrapperProps } from '../internal/pickers/wrappers/MobileWrapper';
import { RangeInput, DateRange } from '../DateRangePicker/RangeTypes';
import { DateRangeValidationError, ValidationProps } from '../internal/pickers/hooks/useValidation';
import { ExportedDateRangePickerViewProps } from '../DateRangePicker/DateRangePickerView';
import { ExportedDateRangePickerInputProps } from '../DateRangePicker/DateRangePickerInput';
interface BaseDateRangePickerProps<TDate> extends ExportedDateRangePickerViewProps<TDate>, ValidationProps<DateRangeValidationError, RangeInput<TDate>>, ExportedDateRangePickerInputProps {
    /**
     * The components used for each slot.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    components?: ExportedDateRangePickerViewProps<TDate>['components'] & ExportedDateRangePickerInputProps['components'];
    /**
     * Text for end input label and toolbar placeholder.
     * @default 'End'
     */
    endText?: React.ReactNode;
    /**
     * Custom mask. Can be used to override generate from format. (e.g. `__/__/____ __:__` or `__/__/____ __:__ _M`).
     * @default '__/__/____'
     */
    mask?: ExportedDateRangePickerInputProps['mask'];
    /**
     * Min selectable date. @DateIOType
     * @default defaultMinDate
     */
    minDate?: TDate;
    /**
     * Max selectable date. @DateIOType
     * @default defaultMaxDate
     */
    maxDate?: TDate;
    /**
     * Callback fired when the value (the selected date range) changes @DateIOType.
     */
    onChange: (date: DateRange<TDate>, keyboardInputValue?: string) => void;
    /**
     * Text for start input label and toolbar placeholder.
     * @default 'Start'
     */
    startText?: React.ReactNode;
    /**
     * The value of the date range picker.
     */
    value: RangeInput<TDate>;
}
export interface MobileDateRangePickerProps<TDate = unknown> extends BaseDateRangePickerProps<TDate>, MobileWrapperProps {
}
declare type MobileDateRangePickerComponent = (<TDate>(props: MobileDateRangePickerProps<TDate> & React.RefAttributes<HTMLDivElement>) => JSX.Element) & {
    propTypes: unknown;
};
/**
 *
 * Demos:
 *
 * - [Date Range Picker](https://material-ui.com/components/date-range-picker/)
 *
 * API:
 *
 * - [MobileDateRangePicker API](https://material-ui.com/api/mobile-date-range-picker/)
 */
declare const MobileDateRangePicker: MobileDateRangePickerComponent;
export default MobileDateRangePicker;
