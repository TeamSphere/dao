import { useAddress, useMetamask } from '@thirdweb-dev/react';

const App = () => {

    const address = useAddress();
    const connectWithMetamask = useMetamask();
    console.log(address);

    





    return (
    <div className="landing">
      <h1>Welcome to the Sphere</h1>
    </div>
  );
};

export default App;
