import numeral from 'numeral';

import {
  CHART_META_DATA,
  NUMBER_FORMAT_PRICE
} from '../constants/formatting';

function isNumberAndInChartMetaDataRange(number) {
  if (typeof number !== 'number'
      || number < 0
      || number >= CHART_META_DATA.length) {
    return false;
  }
  return true;
}

export function getTooltipLabelFormatter(chartTimePeriodIndex) {
  if (!isNumberAndInChartMetaDataRange(chartTimePeriodIndex)) {
    return null;
  }
  return CHART_META_DATA[chartTimePeriodIndex].getTooltipLabelFormatter;
}

export function getXAxisDataKey(chartTimePeriodIndex) {
  if (!isNumberAndInChartMetaDataRange(chartTimePeriodIndex)) {
    return null;
  }
  return CHART_META_DATA[chartTimePeriodIndex].xAxisDataKey;
}

export function getXAxisMinTickGap(chartTimePeriodIndex) {
  if (!isNumberAndInChartMetaDataRange(chartTimePeriodIndex)) {
    return null;
  }
  return CHART_META_DATA[chartTimePeriodIndex].xAxisMinTickGap;
}

export function getXAxisTickFormatter(chartTimePeriodIndex) {
  if (!isNumberAndInChartMetaDataRange(chartTimePeriodIndex)) {
    return null;
  }
  return CHART_META_DATA[chartTimePeriodIndex].getXAxisTickFormatter;
}

export const formatAsPrice = value => (
  numeral(value).format(NUMBER_FORMAT_PRICE)
);