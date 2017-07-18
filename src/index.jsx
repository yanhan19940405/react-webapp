import React from 'react';
import ReactDOM from 'react-dom';
class HelloWorld extends React.Component{
	render() {

		return  (<h1>Hello  World</h1>);
     
	}
}

function Index() {
    return (
      <div className="container">
        <h1>Hello React!</h1>
      </div>
    );
}

ReactDOM.render(<Index />, document.getElementById('root'));
ReactDOM.render(
  <HelloWorld/>,
document.getElementById('YH')
);

export default Index;