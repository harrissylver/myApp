import { IonBadge, IonButton, IonCheckbox, IonCol, IonFab, IonFabButton, IonIcon, IonInput, IonItem, IonLabel, IonList, IonLoading, IonNote, IonRow, IonText } from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from '../toast';
import './ExploreContainer.css';
import { registerUser } from '../firebaseConfig'
interface ContainerProps { }

const ExploreRegister: React.FC<ContainerProps> = () => {
  const [busy, setBusy] = useState<boolean>(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  async function register() {
   
    // validation
    setBusy(true)
    if (password !== cpassword) {
      return toast('Mot de passe non identique')
    }
    if (username.trim() === '' || password.trim() === '') {
      return toast('username et password required')
    }
    const res = await registerUser(username, password)
    if(res){
      toast('Inscription avec success !')
    }
    setBusy(false)
  }
  return (
    <div className="container">
       <IonLoading message="Enregistement en cours..." duration={0} isOpen={busy} />
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
          <IonItem>
            <IonLabel position="floating"> Confirmation Password</IonLabel>
            <IonInput type="password" onIonChange={(e: any) => setCPassword(e.target.value)}></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton onClick={register}>Enregistrer</IonButton>
          <hr/>
          <p>vous avez deja un compte?<Link to="/">Login</Link> </p>
        </IonCol>
      </IonRow>
    </div>
  );
};

export default ExploreRegister;
