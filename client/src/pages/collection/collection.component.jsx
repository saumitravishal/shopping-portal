import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { firestore} from '../../firebase/firebase.utils';

import "./collection.styles.scss";

// using useEffect as componentWillUnmount
const CollectionPage = ({ collection }) => {
  useEffect(() => {
    console.log('I am subscribing');
    const unsubscribeFromCollections = firestore
      .collection("collections")
      .onSnapshot(snapshot => console.log(snapshot));

    return () => {
      console.log("I am unsubscribing");
      unsubscribeFromCollections();
    };
  }, []);
  // console.log("match", match.params.collectionId);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
