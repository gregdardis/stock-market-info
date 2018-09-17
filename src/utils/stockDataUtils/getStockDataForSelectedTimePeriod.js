import { getStockDataKey } from '../chartUtils';
// import { getSelectedStockValueForKey } from '../stateGetters';
import { selectedStockValueForKeySelector } from '../../client/selectors';
import { CHART_META_DATA } from '../../constants/formatting';
import { chartTimePeriodIndexSelector } from '../../client/selectors';

export const getStockDataForSelectedTimePeriod = state => {
  const selectedTimePeriodIndex = chartTimePeriodIndexSelector(state);
  const stockDataKey = getStockDataKey(selectedTimePeriodIndex);
  // const stockData = getSelectedStockValueForKey(state, stockDataKey);
  const stockData = selectedStockValueForKeySelector(state, stockDataKey);
  return CHART_META_DATA[
    selectedTimePeriodIndex
  ].getStockDataForTimePeriod(stockData);
};