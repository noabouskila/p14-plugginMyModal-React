# p14-plugginMyModal-React

Ce projet est un plugin modal pour React, conçu pour être facilement intégré dans d'autres applications React. Il vise à fournir une solution simple et efficace pour afficher des modaux.

## Technologies

- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **JavaScript** : Langage principal utilisé pour la logique de l'application.

## Installation

1. Installez le package via npm :
   ```bash
   `npm install npm i @noabouskil/p14-modal`


2. Importez le plugin dans votre projet :

`import MyModal from '@noabouskila/p14-modal';`

## Utilisation

voici un expemple d'utilisation du pluggin dans votre projet 
```javascript
import React, { useState } from 'react';
import MyModal from '@noabouskila/p14-modal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Ouvrir Modal</button>
      <MyModal isOpen={isOpen} onClose={toggleModal}>
        <h2>Titre du Modal</h2>
        <p>Contenu du modal.</p>
      </MyModal>
    </div>
  );
};

export default App;

```

## Dépendances

Voici les dépendances utilisées dans le projet :
`react` : Pour construire les composants.
`react-dom` : Pour la gestion du DOM dans les applications React.

## Auteurs

Développeur front-end : **Noa Bouskila** - [Profil GitHub](https://github.com/noabouskila)
