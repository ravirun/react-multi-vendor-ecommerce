import Layout from "./components/Layout";
import DrawerProvider from "./contexts/DrawerContext";

function App() {
  return (
    <>
      <DrawerProvider>
        <Layout>
          <div className="text-3xl">
            Hello
          </div>
        </Layout>
      </DrawerProvider>
    </>
  );
}

export default App;
