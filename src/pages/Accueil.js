import LienAccueil from "../components/Elements/LienAccueil";
import Page from "./Page";
import europe from "../img/modes/europe.png";
import afrique from "../img/modes/afrique.png";
import monde from "../img/modes/monde.png";

export default function Accueil() {
  return (
    <Page>
      <h2 className="text-center my-4">Modes de jeu</h2>
      <div className="grid grid-cols-3 mx-12 gap-4">
        <LienAccueil href="/europe" texte="Europe" img={europe}/>
        <LienAccueil href="/afrique" texte="Afrique" img={afrique}/>
        <LienAccueil href="/monde" texte="Monde" img={monde}/>
      </div>
    </Page>
  );
}