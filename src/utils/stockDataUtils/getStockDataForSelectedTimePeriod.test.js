import {
  getStockDataForSelectedTimePeriod
} from './getStockDataForSelectedTimePeriod';
import * as chartUtils from '../chartUtils';
import * as stateGetters from '../stateGetters';

describe('getStockDataForSelectedTimePeriod', () => {
  it('properly gets stock data for a time period', () => {
    const mockOneDayStockData = [
      {
        date: '1986-03-12',
        price: 0.097222
      },
      {
        date: '1986-03-13',
        price: 0.100694
      }
    ];

    const getStockDataKeyStub = jest.spyOn(
      chartUtils,
      'getStockDataKey'
    ).mockReturnValue('oneDayStockData');

    const getSelectedStockValueForKeyStub = jest.spyOn(
      stateGetters,
      'getSelectedStockValueForKey'
    ).mockReturnValue(mockOneDayStockData);

    const mockState = {
      chartTimePeriodIndex: 0
    };

    expect(getStockDataForSelectedTimePeriod(mockState))
      .toEqual(mockOneDayStockData);

    getStockDataKeyStub.mockReset();
    getSelectedStockValueForKeyStub.mockReset();
  });
});