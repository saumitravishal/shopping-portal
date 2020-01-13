import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
// import {
//   firestore,
//   convertCollectionSnapshotToMap
// } from "../../firebase/firebase.utils";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { createStructuredSelector } from "reselect";
import { fetchCollectionsStartAsyc } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionsFetching,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop.selectors";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";
//import collectionOverviewComponent from "../../components/collection-overview/collection-overview.component";

//const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     loading: true
  //   };
  // }
  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    // handle asynchronus code in action file itself
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    const { fetchCollectionsStartAsyc } = this.props;
    fetchCollectionsStartAsyc();
  }
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        {/* <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        /> */}
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
        {/* <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionLoading}
              {...props}
            />
          )}
        /> */}
      </div>
    );
  }
}

// Handle through hoc container file
// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionsFetching,
//   isCollectionLoading: selectIsCollectionsLoaded
// });

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsyc: () => dispatch(fetchCollectionsStartAsyc())
});

// handling dispatchin now in action file itself
// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap =>
//     dispatch(updateCollections(collectionsMap))
// });

export default connect(null, mapDispatchToProps)(ShopPage);
