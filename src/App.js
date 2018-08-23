import React, { Component } from 'react';
import PositionColumn from './PositionColumn';
import Modal from './Modal';
import PlayerModal from './PlayerModal.js';
// import PickModal from './PickModal.js';
import './style.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      refresh: false,
      showModal: false,
      selected: {
        id: 1,
        name: 'Aaron Rodgers',
        position: 'QB',
        team: 'GB',
        available: false
      },
      QB: [],
      RB: [],
      WR: [],
      TE: [],
      PK: [],
      DEF: []
    }
  }

  componentDidMount() {
    this.initTPII()
      .then(({sorted}) => this.setState({...sorted}, () => this.setState({refresh: !this.state.refresh})))
      .catch(err => console.log(err));
  }

  initTPII = async () => {
    const response = await fetch('http://localhost:4000/init');
    const body = await response.json();
    return body;
  }

  playSelection = (name) => {
    const synth = window.speechSynthesis;
    const thePickIsIn = new SpeechSynthesisUtterance('The pick is in.');
    const playerName = new SpeechSynthesisUtterance(name);
    new Audio('http://mnweber.me/tpii/thepickisin.mp3').play();
    setTimeout(() => {
      synth.speak(thePickIsIn);
      setTimeout(() => {
        synth.speak(playerName);
      }, 2000)
    }, 5000);
  }

  makePick = () => {
    const position = this.state.selected.position;
    const updated = this.state[position].map((player, i) => {
      return this.state.selected.id === player.id ? {...player, available: false} : player;
    })
    this.setState({[position]: updated, refresh: !this.state.refresh}, () => {
      this.toggleModal();
      this.playSelection(this.state.selected.name);
    });
  }

  undoPick = () => {
    const position = this.state.selected.position;
    const updated = this.state[position].map((player, i) => {
      return this.state.selected.id === player.id ? {...player, available: true} : player;
    })
    this.setState({[position]: updated, refresh: !this.state.refresh}, () => {
      this.toggleModal();
    });
  }

  selectPlayer = (pid, position) => {
    const updated = this.state[position].filter((player, i) => {
      return player.id === pid;
    })

    this.setState({selected: updated[0]}, () => {
      this.toggleModal();
    });
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal});
  }

  render() {
    const playerModal = this.state.showModal ? <Modal> <PlayerModal toggle={this.toggleModal} pick={this.makePick} undo={this.undoPick} {...this.state.selected} /> </Modal>: null;

    return (
      <div className="App">
        <div className="position-column-container">
          <div className="position-column-vertical-align">
            <PositionColumn refresh={this.state.refresh} toggle={this.selectPlayer} position="Quarterbacks" players={this.state.QB} />
            <PositionColumn refresh={this.state.refresh} toggle={this.selectPlayer} position="Wide Receivers" players={this.state.WR} />
            <PositionColumn refresh={this.state.refresh} toggle={this.selectPlayer} position="Running Backs" players={this.state.RB} />
            <PositionColumn refresh={this.state.refresh} toggle={this.selectPlayer} position="Tight Ends" players={this.state.TE} />
            <PositionColumn refresh={this.state.refresh} toggle={this.selectPlayer} position="Kickers" players={this.state.PK} />
            <PositionColumn refresh={this.state.refresh} toggle={this.selectPlayer} position="Defense" players={this.state.DEF} />
          </div>
        </div>
        {playerModal}
      </div>
    );
  }
}

export default App;
