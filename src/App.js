import "./App.css";
import user from "./data/user.json";
import Profile from "../src/Components/Profile/Profile";
import Statistics from "../src/Components/Statistics/Statistics";
import statisticalData from "./data/statisticalData.json";
import friends from "./data/friends.json";
import FriendList from "./Components/FriendList/FriendList";

import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

function App() {
  return (
    <div className="s.App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
