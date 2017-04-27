/**
 * Created by kaylo on 4/19/2017.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FormControl, FormGroup, Checkbox} from 'react-bootstrap'

export default class SearchBar extends Component {
  render () {
    return (
    <FormGroup>
      <FormControl
            type='text'
            id='searchStringBox'
            placeholder='Search...'
            onChange={(event) => this.props.handleSearchString(event.target.value)}
            />
        <Checkbox
          id='filterStockedCheckBox'
          type='checkbox'
          onClick={this.props.handleFilterStockedToggle}
              >
          "Only show products in stock"
          </Checkbox>
    </FormGroup>
    )
  }
}

SearchBar.propTypes = {
  handleSearchString: PropTypes.func,
  handleFilterStockedToggle: PropTypes.func
}
