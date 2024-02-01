import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import MainPage from './components/MainPage/MainPage';
import MarketplacePage from './components/MarketplacePage/MarketplacePage';
import ArtistPage from './components/ArtistPage/ArtistPage';
import NFTPage from './components/NFTPage/NFTPage';
import CreateAccPage from './components/CreateAccPage/CreateAccPage';
import ConnectWalletPage from './components/ConnectWalletPage/ConnectWalletPage';
import RankingsPage from './components/RankingsPage/RankingsPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/connect-wallet" element={<ConnectWalletPage />} />
            <Route path="/create-acc" element={<CreateAccPage />} />
            <Route path="/artist" element={<ArtistPage />} />
            <Route path="/nft" element={<NFTPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;