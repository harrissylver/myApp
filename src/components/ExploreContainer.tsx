import { IonBadge, IonButton, IonCheckbox, IonFab, IonFabButton, IonIcon, IonInput, IonItem, IonLabel, IonList, IonLoading, IonNote, IonText } from '@ionic/react';
import { useSelector } from 'react-redux';
import './ExploreContainer.css';
import { logoutUser } from '../firebaseConfig';
import { useHistory } from 'react-router';
import { useState } from 'react';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const username = useSelector((state: any) => state.user.username)
  const [busy, setBusy] = useState(false)
  const history = useHistory()
  async function logout() {
    setBusy(true)
    await logoutUser()
    setBusy(false)
    history.replace('/')
  }
  return (
    <div className="container">
      <IonLoading message="Deconnection en cours..." duration={0} isOpen={busy} />
      <h1>Bonjour {username}</h1>
      <IonButton onClick={logout}>Deconnectez</IonButton>
    </div>
  );
};

export default ExploreContainer;
