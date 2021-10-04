import "./App.css";
import user from "./user.json";
import Profile from "../src/Components/Profile/Profile";
import Statistics from "../src/Components/Statistics/Statistics";
import statisticalData from "./statisticalData.json";
import friends from "./friends.json";
import FriendList from "./Components/FriendList/FriendList";

import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
