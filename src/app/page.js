
import Sidebar from "./components/home/Sidebar";
import TeamMembers from "./components/common/TeamMembers";
import ChatData from "./components/home/ChatData";
import Grid from "./components/home/Grid";

export default function Home() {

  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatData/>
      <TeamMembers />
      {/* <Grid/> */}
    </div>
  );
}
