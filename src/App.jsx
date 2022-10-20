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
        <CardLayout>
          <FaqImage />
        </CardLayout>
        <CardLayout>
          <FaqContainer />
        </CardLayout>
      </Card>
      <Footer />
    </>
  );
}

export default App;
