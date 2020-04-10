import React from 'react';

import Post from './Post';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello world!</h1>
        <Post title='Teste de post 1' />
        <Post title='Teste de post 2' />
        <Post title='Teste de post 3' />
      </div>
    );
  }
}
