import './assets/main.css';
import './assets/layout.css';
import './assets/font-awesome.min.css';
import './assets/form.css';
import './assets/coming-soon.css';

import { Hero } from './components/hero/Hero';
import { MainContent } from './components/main-content/MainContent';
import { Footer } from './components/footer/Footer';

export function App() {
  return (
    <>
      <main>
        <Hero />
        <MainContent />
      </main>
      <Footer />
    </>
  )
}