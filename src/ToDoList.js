import React, { Component } from 'react';

export default class TodoList extends Component {
  render(){
    return <div>
      <ul />
      <input type='text' name='todo'/>
      <button>Adicionar</button>
    </div>
  }
}

