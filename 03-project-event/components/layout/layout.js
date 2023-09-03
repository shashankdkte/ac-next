import Notification from "../ui/notification";
import MainHeader from "./main-header";

const { Fragment } = require("react");

function Layout(props) {
  return <Fragment>
    <MainHeader />
    <main>
      {props.children}
    </main>
    <Notification  title="Test" message="This is a test" status="error"/>
  </Fragment>
}

export default Layout;