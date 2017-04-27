/**
 * Created by kaylo on 4/19/2017.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableBody from './TableBody'
import {Table} from 'react-bootstrap'

export default class StockTable extends Component {
  render () {
    return (
      <Table bordered condensed hover>
        <thead>
          <tr>
            <td><strong>Name</strong></td>
            <td>Price</td>
          </tr>
        </thead>
        <TableBody
          inventory={this.props.inventory}
          filterStocked={this.props.filterStocked}
          searchString={this.props.searchString}
          priceTotal={this.props.priceTotal}
          updateInCart={this.props.updateInCart}
        />
      </Table>
    )
  }
}

StockTable.propTypes = {
  inventory: PropTypes.object,
  filterStocked: PropTypes.bool,
  searchString: PropTypes.string,
  priceTotal: PropTypes.number,
  updateInCart: PropTypes.func
}
