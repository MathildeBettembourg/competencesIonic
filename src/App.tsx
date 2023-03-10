import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personOutline, bookmarksOutline} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import TabProfils from './pages/TabProfils';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import CompetenceDetail from './pages/CompetenceDetail';
import EditionProfil from './layout/EditionProfil';
import Tab2 from './pages/Tab2';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route path="/TabProfils" component={TabProfils}>
            <TabProfils />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
          <Route path='/competenceDetail/:id' component={CompetenceDetail}></Route>
          <Route path='/EditionProfil/:id' component={EditionProfil}></Route>
          <Route path='/Tab2/:id' component={Tab2}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={bookmarksOutline} />
            <IonLabel>Competences</IonLabel>
          </IonTabButton>
          <IonTabButton tab="TabProfils" href="/TabProfils">
            <IonIcon icon={personOutline}/>
            <IonLabel>Profils</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
