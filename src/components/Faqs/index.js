// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {
      faqsList,
    }
  }

  faqAction = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(item => {
        if (item.id === id) {
          if (item.isExpanded === undefined) {
            return {...item, isExpanded: true}
          }
          return {...item, isExpanded: !item.isExpanded}
        }
        return item
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="container">
        <div className="faq-card">
          <h1>FAQ</h1>
          <ul>
            {faqsList.map(faq => (
              <FaqItem key={faq.id} details={faq} faqAction={this.faqAction} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
