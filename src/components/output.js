import React from 'react'

class Output extends React.Component {
  render() {
    return (
      <div className="output" dangerouslySetInnerHTML={{__html: this.props.text}}></div>
    )
  }
}

export default Output