import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';
import { validateDate } from '../internal/pickers/date-utils';
import { useUtils, useNow } from '../internal/pickers/hooks/useUtils';
export const createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
  switch (action.type) {
    case 'changeYear':
      return _extends({}, state, {
        currentYear: action.newMonth,
        currentMonth: action.newMonth,
      });
    case 'changeMonth':
      return _extends({}, state, {
        slideDirection: action.direction,
        currentMonth: action.newMonth,
        isMonthSwitchingAnimating: !reduceAnimations
      });

    case 'finishMonthSwitchingAnimation':
      return _extends({}, state, {
        isMonthSwitchingAnimating: false
      });

    case 'changeFocusedDay':
      {
        if (state.focusedDay !== null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
          return state;
        }

        const needMonthSwitch = Boolean(action.focusedDay) && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
        return _extends({}, state, {
          focusedDay: action.focusedDay,
          isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations,
          currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
          slideDirection: utils.isAfterDay(action.focusedDay, state.currentMonth) ? 'left' : 'right'
        });
      }

    default:
      throw new Error('missing support');
  }
};
export function useCalendarState({
  date,
  defaultCalendarMonth,
  disableFuture,
  disablePast,
  disableSwitchToMonthOnDayFocus = false,
  maxDate,
  minDate,
  onMonthChange,
  reduceAnimations,
  shouldDisableDate
}) {
  var _ref;

  const now = useNow();
  const utils = useUtils();
  const reducerFn = React.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
  const [calendarState, dispatch] = React.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: date || now,
    currentMonth: utils.startOfMonth((_ref = date != null ? date : defaultCalendarMonth) != null ? _ref : now),
    slideDirection: 'left'
  });
  const handleChangeMonth = React.useCallback(payload => {
    dispatch(_extends({
      type: 'changeMonth'
    }, payload));

    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  const changeMonth = React.useCallback(newDate => {
    const newDateRequested = newDate != null ? newDate : now;
    
    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }
    
    handleChangeMonth({
      newMonth: utils.startOfMonth(newDateRequested),
      direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? 'left' : 'right'
    });
  }, [calendarState.currentMonth, handleChangeMonth, now, utils]);

  // salman's changes  
  const handleChangeYear = React.useCallback(payload => {
    dispatch(_extends({
      type: 'changeYear'
    }, payload));

    // if (onMonthChange) {
    //   onMonthChange(payload.newMonth);
    // }
  }, []);
  const changeYear = React.useCallback(newDate => {
    const newDateRequested = newDate != null ? newDate : now;
    
    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }

    handleChangeYear({
      newMonth: utils.startOfMonth(newDateRequested),
    });
  }, [calendarState.currentMonth, handleChangeYear, now, utils]);

  const isDateDisabled = React.useCallback(day => validateDate(utils, day, {
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate
  }) !== null, [disableFuture, disablePast, maxDate, minDate, shouldDisableDate, utils]);
  const onMonthSwitchingAnimationEnd = React.useCallback(() => {
    dispatch({
      type: 'finishMonthSwitchingAnimation'
    });
  }, []);
  const changeFocusedDay = React.useCallback(newFocusedDate => {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: 'changeFocusedDay',
        focusedDay: newFocusedDate
      });
    }
  }, [isDateDisabled]);
  return {
    calendarState,
    changeMonth,
    changeYear,
    changeFocusedDay,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    handleChangeMonth,
    handleChangeYear
  }; 
}