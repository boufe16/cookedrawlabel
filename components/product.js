'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      console.log("esti")
      return 'You liked this.';
    }
    return e(
      'button',
      {onClick: ()=>this.setState({liked:true})},
      'Like'
    );
  }
}

document.querySelectorAll('.myCustomProduct').forEach(domContainer =>{
    ReactDOM.render(e(LikeButton), domContainer);
});