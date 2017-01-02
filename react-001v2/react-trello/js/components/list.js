import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card';

// export default function List(props) {
//   let cardsHTML = [];
  
//   for (var i = 0; i < 3; i++) {
//     cardsHTML.push(<div className="col-4" key={i}><Card key={i} rowTitle={props.rowTitle} text={props.cards[i].text + i} description={props.cards[i].text + i}/></div>);
//   }

//   return (
//     <row key={props.id}>
//       <div className="row">
//         <div className="col-3l">
//           <h2 className="row-header">{props.rowTitle}</h2>
//         </div>
//         <div className="col-3">
//           <form className="row-header-form">
//             <input type="text" placeholder="add a card"/>
//             <button>Add card</button>
//           </form>
//         </div>
//       </div>
//       <div className="row">
//         {cardsHTML}
//       </div>  
//     </row>
//   );
// }

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {cardText: ''};
  }

  handleButtonClick(event) {
    event.preventDefault();
    console.log(this.state.cardText);
  }

  handleChange(event) {
    this.setState({cardText: event.target.value});
  }

  render() {
    let cardsHTML = [];
    
    for (var i = 0; i < 3; i++) {
      cardsHTML.push(
        <div className="col-4" key={i}>
          <Card key={i} 
             
            rowTitle={this.props.rowTitle} 
            text={this.props.cards[i].text + i} 
            description={this.props.cards[i].text + i}/>
        </div>);
    }

    return (
      <row key={this.props.id}>
        <div className="row">
          <div className="col-3l">
            <h2 className="row-header">{this.props.rowTitle}</h2>
          </div>
          <div className="col-3">
            <form className="row-header-form">
              <input value={this.state.cardText} onChange={this.handleChange} type="text" placeholder="add a card"/>
              <button onClick={this.handleButtonClick}>Add card</button>
            </form>
          </div>
        </div>
        <div className="row">
          {cardsHTML}
        </div>  
      </row>
    );
  }
}
