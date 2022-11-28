import React from "react";

/* Components */
import Information from "../components/Information/Information";
import Projects from "../components/Projects/Projects";

/* Layout */
import Footer from "../layout/Footer/Footer";

const HomeView = () => {
    return (
        <div className='container container--sm'>
          <header>
            <Information />
          </header>
    
          <main>
            <Projects />
          </main>

          <hr className='devider' />

          <footer>
            <Footer />
          </footer>
        </div>
      );
}

export default HomeView;