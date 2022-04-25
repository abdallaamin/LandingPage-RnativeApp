import './App.css';
import {Download ,Features,SectionWrapper} from './components'
import assets from './assets'
import styles from './styles/Global';

const App=()=> {
  return (
    <>
    <SectionWrapper 
    title="You own store of Nifty NFTs. Start Selling & Growing"
    description="Buy, store, collect NFTS, exchange & earn crypto."
    showBtn
    mockupImg={assets.homeHero}
    />
    <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="It's built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download/>
      <div className="px-4 py-2 justify-center items-center bg-gray-600 flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with {`❤️`} by {" "}
        <span className="bold">Abdalla Amin </span>
        </p>
      </div>
    </>
  );
}

export default App;
