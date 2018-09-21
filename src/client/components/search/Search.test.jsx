import React from 'react';
import {
  mount,
  shallow
} from 'enzyme';

import Search from './Search';

const mockFunction = () => {};

const baseProps = {
  clearSearchError: mockFunction,
  clearSearchText: mockFunction,
  fetchStock: mockFunction,
  hasError: false,
  setStockFromMemCache: mockFunction,
  stocks: {
    MSFT: {}
  },
  text: 'ABCD',
  updateSearchText: mockFunction
};

describe('<Search />', () => {
  it('true equals true', () => {
    expect(true).toBe(true);
  });
});

describe('handleSearch', () => {
  it('should call none of it\'s functions if text is empty string', () => {
    const setStockFromMemCache = jest.fn();
    const fetchStock = jest.fn();
    const clearSearchError = jest.fn();

    const propsHandleSearchFunction = {
      ...baseProps,
      clearSearchError,
      fetchStock,
      setStockFromMemCache,
      text: ''
    };

    const wrapper = shallow(
      <Search { ...propsHandleSearchFunction }/>
    );

    wrapper.instance().handleSearch();

    expect(propsHandleSearchFunction.clearSearchError)
      .toHaveBeenCalledTimes(0);
    expect(propsHandleSearchFunction.fetchStock)
      .toHaveBeenCalledTimes(0);
    expect(propsHandleSearchFunction.setStockFromMemCache)
      .toHaveBeenCalledTimes(0);
  });
  it('should call correct functions if text is in stocks in state', () => {
    const setStockFromMemCache = jest.fn();
    const fetchStock = jest.fn();
    const clearSearchError = jest.fn();

    const propsHandleSearchFunction = {
      ...baseProps,
      clearSearchError,
      fetchStock,
      setStockFromMemCache,
      text: 'MSFT'
    };

    const wrapper = shallow(
      <Search { ...propsHandleSearchFunction }/>
    );

    wrapper.instance().handleSearch();

    expect(propsHandleSearchFunction.clearSearchError)
      .toHaveBeenCalledTimes(1);
    expect(propsHandleSearchFunction.fetchStock)
      .toHaveBeenCalledTimes(1);
    expect(propsHandleSearchFunction.setStockFromMemCache)
      .toHaveBeenCalledTimes(1);
  });
  it('should call correct functions if text is not undefined, ' +
     'but is not a stock in the state', () => {
    const setStockFromMemCache = jest.fn();
    const fetchStock = jest.fn();
    const clearSearchError = jest.fn();

    const handleSearchFunctionProps = {
      ...baseProps,
      clearSearchError,
      fetchStock,
      setStockFromMemCache
    };

    const wrapper = shallow(
      <Search { ...handleSearchFunctionProps }/>
    );

    wrapper.instance().handleSearch();

    expect(handleSearchFunctionProps.clearSearchError)
      .toHaveBeenCalledTimes(1);
    expect(handleSearchFunctionProps.fetchStock)
      .toHaveBeenCalledTimes(1);
    expect(handleSearchFunctionProps.setStockFromMemCache)
      .toHaveBeenCalledTimes(0);
  });
});

describe('handleChange', () => {
  it('calls correct functions', () => {
    const updateSearchText = jest.fn();
    const clearSearchError = jest.fn();

    const handleChangeProps = {
      ...baseProps,
      clearSearchError,
      updateSearchText
    };

    const mockEvent = {
      target: {
        value: 'a'
      }
    };

    const wrapper = shallow(
      <Search {...handleChangeProps } />
    );

    wrapper.instance().handleChange(mockEvent);

    expect(handleChangeProps.clearSearchError)
      .toHaveBeenCalledTimes(1);
    expect(handleChangeProps.updateSearchText)
      .toHaveBeenCalledTimes(1);
    expect(handleChangeProps.updateSearchText)
      .toHaveBeenCalledWith(mockEvent.target.value);
  });
});

describe('handleKeyDown', () => {
  it('behaves properly if enter key is pressed', () => {
    const clearSearchText = jest.fn();
    const handleSearchSpy = jest.spyOn(Search.prototype, 'handleSearch');

    const handleKeyDownProps = {
      ...baseProps,
      clearSearchText
    };

    const wrapper = shallow(
      <Search {...handleKeyDownProps } />
    );

    const mockEvent = {
      key: 'Enter'
    };

    wrapper.instance().handleKeyDown(mockEvent);

    expect(handleKeyDownProps.clearSearchText)
      .toHaveBeenCalledTimes(0);
    expect(handleSearchSpy)
      .toHaveBeenCalledTimes(1);

    handleSearchSpy.mockClear();
  });
  it('behaves properly if escape key is pressed', () => {
    const clearSearchText = jest.fn();
    const handleSearchSpy = jest.spyOn(Search.prototype, 'handleSearch');

    const handleKeyDownProps = {
      ...baseProps,
      clearSearchText
    };

    const wrapper = shallow(
      <Search {...handleKeyDownProps } />
    );

    const mockEvent = {
      key: 'Escape'
    };

    wrapper.instance().handleKeyDown(mockEvent);

    expect(handleKeyDownProps.clearSearchText)
      .toHaveBeenCalledTimes(1);
    expect(handleSearchSpy)
      .toHaveBeenCalledTimes(0);

    handleSearchSpy.mockClear();
  });
});