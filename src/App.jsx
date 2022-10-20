import "./App.css";
import { FaqContainer } from "./components/FaqContainer/FaqContainer";
import { FaqImage } from "./components/FaqImage/FaqImage";
import { Footer } from "./components/Footer/Footer";
import { CardLayout } from "./Layouts/CardLayout/CardLayout";
import { Card } from "./ui/Card/Card";

function App() {
  return (
    <>
      <Card>
        <CardLayout customHeight="15%">
          <FaqImage />
        </CardLayout>
        <CardLayout customHeight="85%">
          <FaqContainer />
        </CardLayout>
      </Card>
      <Footer />
    </>
  );
}

export default App;
