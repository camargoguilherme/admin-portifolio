import React, { Component, Fragment } from 'react';
import Item from '../../components/Item';
import Modal from '../../components/Modal'

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: [
        {
          target: 'about',
          title: 'About'
        },
        {
          target: 'profile',
          title: 'Profile'
        },
        {
          target: 'skill',
          title: 'Skill'
        },
        {
          target: 'detail',
          title: 'Detail'
        },
        {
          target: 'media',
          title: 'Media'
        }
      ],
      modal: [
        {
          target: 'about',
          title: 'About'
        },
        {
          target: 'profile',
          title: 'Profile'
        },
        {
          target: 'skill',
          title: 'Skill'
        },
        {
          target: 'detail',
          title: 'Detail'
        },
        {
          target: 'media',
          title: 'Media'
        }
      ]
    }
  }
  render() {
    return (
      <Fragment>
        HOME
      </Fragment>
    );
  }
}
