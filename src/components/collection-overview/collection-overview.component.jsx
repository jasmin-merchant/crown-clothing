import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectiionsForPreview } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss'

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectiionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);