import React, { PureComponent } from 'react'
import { debounce, preventSubmit } from '../../helpers'

export class Search extends PureComponent {
  minSearchLength = 3
  page = '1'
  //FIXME: move to env?!?!
  apiKey = '940278f7'

  state = { value: '' }

  search = debounce(function (searchValue) {
    const { page, apiKey, props, minSearchLength } = this

    if (searchValue.length < minSearchLength) {
      props.resetSearch()
      return
    }

    props.fetchMovies({
      apiKey,
      page,
      searchValue,
    })
  }, this, 300)

  handleChange = async (event) => {
    await this.setState({ value: event.target.value })
    this.search(this.state.value)
  }

  render() {
    return <form onSubmit={preventSubmit}>
      <label>
        Search
        <br/>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </label>
    </form>
  }
}
