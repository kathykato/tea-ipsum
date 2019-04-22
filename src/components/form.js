import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <form className="input-form">
        <select value={this.props.numParagraphs} onChange={this.props.updateParagraphs}>
          <option value="1">1 paragraph</option>
          <option value="2">2 paragraphs</option>
          <option value="3">3 paragraphs</option>
          <option value="4">4 paragraphs</option>
          <option value="5">5 paragraphs</option>
          <option value="6">6 paragraphs</option>
          <option value="7">7 paragraphs</option>
          <option value="8">8 paragraphs</option>
          <option value="9">9 paragraphs</option>
          <option value="10">10 paragraphs</option>
        </select>
    </form>
    )
  }
}

export default Form
