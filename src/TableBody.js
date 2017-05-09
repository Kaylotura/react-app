import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {ButtonToolbar, Button} from 'react-bootstrap'

export default class TableBody extends Component {
  render () {
    let categoryList = []
    let tableBody = []
    let filteredInventory = this.props.inventory.filter((inventoryItem) => {
      if (inventoryItem.name.toLowerCase().includes(this.props.searchString.toLowerCase())) {
        if (!this.props.filterStocked) {
          return inventoryItem
        } else if (inventoryItem.stocked) {
          return inventoryItem
        }
      }
    })
    filteredInventory.forEach((inventoryItem) => {
      if (categoryList.indexOf(inventoryItem.category) === -1) {
        categoryList.push(inventoryItem.category)
      }
    })
    for (let i = 0; i < categoryList.length; i++) {
      tableBody.push(
        <tr key={categoryList[i]}><th colSpan='2'>{categoryList[i]}</th></tr>
            )
      filteredInventory.forEach((inventoryItem) => {
        if (categoryList.indexOf(inventoryItem.category) === i) {
          let inventoryId = (inventoryItem.name).replace(/\s+/g, '-').toLowerCase()
          let styleColor = 'black'
          let disabledState = false
          let buttonStyle = 'primary'
          let buttonText = 'Select'
          if (inventoryItem.stocked) {
            styleColor = 'black'
          } else if (!this.props.filterStocked) {
            styleColor = 'red'
            disabledState = true
          }
          if (this.props.inCart.indexOf(inventoryItem.name) !== -1) {
            buttonStyle = 'warning'
            buttonText = 'Unselect'
          }
          tableBody.push(
            <tr key={inventoryItem.name}>
              <td>
                <ButtonToolbar>
                  <Button
                    id={inventoryId}
                    bsStyle={buttonStyle}
                    onClick={
                      (event) => this.props.updateInCart(inventoryItem.name, inventoryItem.price)
                    }
                    disabled={disabledState}
                  >
                    {buttonText}
                  </Button>
                </ButtonToolbar>
              </td>
              <td style={{ color: styleColor }}>
                {inventoryItem.name}
              </td>
              <td style={{ color: styleColor }}>${inventoryItem.price}</td>
            </tr>
          )
        }
      })
    }
    return (
      <tbody>
        {tableBody}
        <tr>
          <td><strong>Total</strong></td>
          <td span='2' id='priceTotal'><strong>${this.props.priceTotal}</strong></td>
        </tr>
      </tbody>
    )
  }
}
TableBody.propTypes = {
  inventory: PropTypes.array,
  filterStocked: PropTypes.bool,
  searchString: PropTypes.string,
  priceTotal: PropTypes.number,
  updateInCart: PropTypes.func,
  inCart: PropTypes.array
}
