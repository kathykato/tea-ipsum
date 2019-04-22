import React from 'react'
import Output from './output'
import Form from './form'

const words = ["tea", "camellia sinensis", "loose leaf", "fair trade", "steep", "brew", "caffeine", "theanine", "catechin", "fermentation", "zen", "antioxidant",  "energy", "focus", "aromatic", "gaiwan", "green", "matcha", "sencha", "genmai", "gyokuro", "kukicha", "hojicha", "shincha", "nokcha", "black", "assam", "nepal", "darjeeling", "nilgiri", "rize", "keemun", "ceylon", "lapsang souchong",  "white", "bai mudan", "baihao yinzhen", "shoumei", "oolong", "pu’erh", "yerba maté", "guayusa", "herbal", "rooibos", "masala chai", "mint", "chamomile", "jasmine", "earl grey", "english breakfast", "irish breakfast", "turmeric", "rose hips", "lemongrass", "ginger", "honeydew", "lychee", "taro", "pearl milk", "boba", "infusion", "blend", "scented", "orange pekoe", "latte", "london fog", "hong kong-style milk", "kombucha", "tisane", "hot", "iced", "teapot", "tea kettle", "yixing", "teacup", "mug", "infuser", "strainer", "bamboo whisk", "sachet", "shrub", "tea time", "tea garden", "teahouse"];

class Generate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numParagraphs: 1,
      numSentences: 5,
      text: this.ipsum(1, 5, words)
    };

    this.updateParagraphs = this.updateParagraphs.bind(this);
    this.updateSentences = this.updateSentences.bind(this);
  }

  updateParagraphs(e) {
    this.setState({
      numParagraphs: e.target.value
    }, this.generateText);
  }

  updateSentences(e) {
    this.setState({
      numSentences: e.target.value
    }, this.generateText);
  }

  generateText() {
    this.setState({
      text: this.ipsum(this.state.numParagraphs, this.state.numSentences, words)
    })
  }

  ipsum(numParagraphs, numSentences, phrases) {
    var text = '';
    if (numParagraphs < 1) {
      return text;
    }

    for (var i = 0; i < numParagraphs; i++) {
      var paragraph = '';
      for (var j = 0; j < numSentences; j++) {
        var sentence = "";
        var numWords = Math.floor(Math.random() * 6 + 10);
        for (var k = 0; k < numWords; k++) {
          var word = "";
          var wordNum = Math.floor(Math.random() * phrases.length);
          word = phrases[wordNum];
          if (k !== 0) {
            sentence += " ";
          }
          sentence += word;
        }
        sentence += ".";
        sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        paragraph += sentence;
        paragraph += " ";
      }
      paragraph = "<p>" + paragraph + "</p>";
      text += paragraph;
    }
    return text;
  }

  render() {
    return (
      <>
        <Form
          updateParagraphs={this.updateParagraphs}
          updateSentences={this.updateSentences}
          numParagraphs={this.state.numParagraphs}
        />
        <Output
          text={this.state.text}
        />
      </>
    )
  }
}

export default Generate
