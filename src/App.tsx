import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

// Gostaria de saber como fazer para compartilhar a interface GenreResponseProps entre os 2 componentes

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onHandleClickButton={handleClickButton} selectedGenreId={selectedGenreId} />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}