import Header from "./components/Header"
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Context } from "./context";

const App = () => {
    return (
        <div>
            <Context>
                <Header/>
                <Main/>
            </Context>
            <Footer/>
        </div>
    )
}

export default App;