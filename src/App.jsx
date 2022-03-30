import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {

    const address = useAddress();
    const connectWithMetamask = useMetamask();
    console.log(address);

    if (!address) {

    }




    return (
    <div className="landing">
      <h1>The Sphere V1</h1>
      <h3>Beta</h3>
    </div>
  );
};

export default App;
