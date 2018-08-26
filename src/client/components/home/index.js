import { connect } from 'react-redux';

import Home from './Home';

const isStockLoading = state =>
  state.isFetching;

const mapStateToProps = state => ({
  isLoading: isStockLoading(state),
  searchError: state.search.error
});

export default connect(mapStateToProps)(Home);