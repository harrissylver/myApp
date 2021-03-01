
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreLogin from '../components/ExploreLogin';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreLogin />
      </IonContent>
    </IonPage>
  );
};

export default Home;
