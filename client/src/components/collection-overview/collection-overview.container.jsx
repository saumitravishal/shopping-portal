import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching
});

// this is fine but we can use compose if we have more hoc
// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
