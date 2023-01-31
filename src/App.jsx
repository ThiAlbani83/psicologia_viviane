import { useState } from 'react'
import { Navbar } from './components';
import { Hero } from './components';
import { QuemSou } from './components';
import { Tratamentos } from './components';
import { DuvidasFrequentes } from './components';
import { Contato } from './components';
import {Footer} from './components';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <QuemSou />
    <Tratamentos /> 
    <DuvidasFrequentes />
    <Contato />
    <Footer />
  </div>
)


export default App