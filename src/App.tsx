import Header from "@/components/Header.tsx";
import MyInfo from "@/components/MyInfo.tsx";
import MainGrid from "@/components/MainGrid.tsx";
import Footer from "@/components/Footer.tsx"


function App() {
  return (
    <>
      <Header />
      <main>
        <MyInfo />
        <MainGrid />
      </main>
      <Footer />
    </>
  )
}

export default App;
