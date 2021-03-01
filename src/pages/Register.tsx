import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreRegister from '../components/ExploreRegister';
import './Home.css';

const Register: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Insription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreRegister />
      </IonContent>
    </IonPage>
  );
};

export default Register;
