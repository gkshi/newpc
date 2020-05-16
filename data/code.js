/* eslint no-useless-escape: "off" */

export default [
  {
    title: 'Brew install',
    text: '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"'
  },
  {
    title: 'Yarn install',
    text: 'brew install yarn'
  },
  {
    title: 'Terminal aliases',
    text: 'printf "alias dc=\\"docker-compose\\"\\nalias dev=\\"yarn dev\\"" > $HOME/.zshrc'
  },
  {
    title: 'MongoDB setting',
    text: `brew tap mongodb/brew;
brew install mongodb-community;
brew services start mongodb-community`
  }
]
