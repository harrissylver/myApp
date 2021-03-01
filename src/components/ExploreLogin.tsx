import { IonBadge, IonButton, IonCheckbox, IonCol, IonFab, IonFabButton, IonIcon, IonInput, IonItem, IonLabel, IonList, IonLoading, IonNote, IonRow, IonText } from '@ionic/react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { personCircle } from 'ionicons/icons';
import './ExploreContainer.css';
import { loginUser } from '../firebaseConfig'
import { toast } from '../toast';
import { useDispatch } from 'react-redux';
import { setUserState } from '../redux/actions';

interface ContainerProps { }

const ExploreLogin: React.FC<ContainerProps> = () => {

  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory()
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  async function login() {
    setBusy(true)
    const res: any = await loginUser(username, password)
    if (res) {
      dispatch(setUserState(res.user.email))
      history.replace('/home')
      toast('You have logged in!')
    }
    setBusy(false)
  }
  return (

    <div className="container">
      <IonLoading message="Veuillez patientez..." duration={0} isOpen={busy} />
      <IonRow>
        <IonCol>
          <IonIcon
            style={{ fontSize: "70px", color: "#0040ff" }}
            icon={personCircle}
          />
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating"> Username</IonLabel>
            <IonInput onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
          </IonItem>
        </IonCol>

      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating"> Password</IonLabel>
            <IonInput type="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton onClick={login}>Se connectez</IonButton>
          <p>
            creation compte <Link to="/register">S'inscrire</Link>
          </p>

        </IonCol>
      </IonRow>
    </div>
  );
};

export default ExploreLogin;
