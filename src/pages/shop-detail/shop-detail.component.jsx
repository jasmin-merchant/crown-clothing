import React from 'react';

import SHOP_DATA from '../shop/shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        const paramName = this.props.match.params.title;
        return(
            <div className="shop-page">
                {
                    collections.filter((collection, idx) => (collection.routeName == paramName))
                    .map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} showAll='true' {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;