import numeral from 'numeral';

import { NUMBER_FORMAT_DEFAULT } from '../../constants/formatting';
import { BLANK_FIELD } from '../../constants/userFacingStrings';
import { selectedStockValueForKeySelector } from '../../client/selectors';

const formatValueForDisplay = (value, formatSpecifier) => {
  if (!value) {
    return BLANK_FIELD;
  }
  return numeral(value).format(formatSpecifier);
};

export const formatValueFromStateAndProps = (state, ownProps) => {
  const stockOverviewData =
    selectedStockValueForKeySelector(state, 'stockOverviewData');
  const dataItemLabel = ownProps.label;

  let {
    value,
    optionalValue,
    valueFormat = NUMBER_FORMAT_DEFAULT,
    optionalValueFormat = NUMBER_FORMAT_DEFAULT
  } = stockOverviewData[dataItemLabel];

  const formattedValue = formatValueForDisplay(value, valueFormat);

  if (!optionalValue) {
    return formattedValue;
  }

  const formattedOptionalValue = formatValueForDisplay(
    optionalValue,
    optionalValueFormat
  );

  return `${formattedValue} (${formattedOptionalValue})`;
};