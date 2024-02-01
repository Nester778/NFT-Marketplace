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
      <Router basename="/NFT-Marketplace">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<MainPage key="main" />} />
            <Route path="/marketplace" element={<MarketplacePage key="marketplace" />} />
            <Route path="/rankings" element={<RankingsPage key="rankings" />} />
            <Route path="/connect-wallet" element={<ConnectWalletPage key="connect-wallet" />} />
            <Route path="/create-acc" element={<CreateAccPage key="create-acc" />} />
            <Route path="/artist" element={<ArtistPage key="artist" />} />
            <Route path="/nft" element={<NFTPage key="nft" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;