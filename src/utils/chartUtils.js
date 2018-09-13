import numeral from 'numeral';

import {
  CHART_META_DATA,
  NUMBER_FORMAT_PRICE
} from '../constants/formatting';

export const getTooltipLabelFormatter = chartTimePeriodIndex => {
  if (typeof chartTimePeriodIndex !== 'number'
      || chartTimePeriodIndex < 0
      || chartTimePeriodIndex >= CHART_META_DATA.length) {
    return null;
  }
  return CHART_META_DATA[chartTimePeriodIndex].getTooltipLabelFormatter;
};

export const getXAxisDataKey = chartTimePeriodIndex => {
  if (typeof chartTimePeriodIndex !== 'number'
      || chartTimePeriodIndex < 0
      || chartTimePeriodIndex >= CHART_META_DATA.length) {
    return null;
  }
  return CHART_META_DATA[chartTimePeriodIndex].xAxisDataKey;
};

// TODO: return null
export const getXAxisMinTickGap = chartTimePeriodIndex => (
  CHART_META_DATA[chartTimePeriodIndex].xAxisMinTickGap
);

export const getXAxisTickFormatter = chartTimePeriodIndex => (
  CHART_META_DATA[chartTimePeriodIndex].getXAxisTickFormatter
);

export const formatAsPrice = value => (
  numeral(value).format(NUMBER_FORMAT_PRICE)
);