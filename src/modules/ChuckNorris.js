import React from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/random';

const getJoke = async () => {
  const request = await fetch(API_URL);

  const data = await request.json();

  console.log(data);

  return data;
};

export class ChuckNorris extends React.Component {
  state = {
    joke: null,
  };

  componentDidMount() {
    getJoke().then(joke => this.setState({ joke }));
  }

  render() {
    const { joke } = this.state;

    if (!joke) {
      return 'Loading';
    }

    return (
      <div>
        {joke.value} {joke.value.includes('chuck').toString()}
      </div>
    );
  }
}
