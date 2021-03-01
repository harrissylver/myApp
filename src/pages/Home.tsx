import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="secondary">
            <IonButton>Account</IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton color="danger">Edit</IonButton>
          </IonButtons>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Login;
