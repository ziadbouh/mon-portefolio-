
import './App.css';



function App() {
  
  return (
    <div className="App">


    <header>
   
      <nav className="navbar">
        <ul>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#projects">Projets</a></li>
        </ul>
      </nav>
    </header>
 
      <main>
     
    <section id="presentation">
    
  <h1>Présentation</h1>
  <div className="presentation-block">
    <p>Je m'appelle Ziad, développeur web freelance passionné et polyvalent. Spécialisé dans le développement web et web mobile, je mets un point d'honneur à créer des solutions modernes, accessibles et sur-mesure pour mes clients.</p>
    <h2>Mon Parcours</h2>
    <p>Mon chemin vers le développement web est tout sauf conventionnel. J'ai commencé par des études en logistique, mais ce domaine ne me permettait pas de m'épanouir pleinement. Une opportunité de stage lors d'une formation m'a ouvert les portes du développement web, une véritable révélation. Depuis, je me suis formé avec acharnement, combinant apprentissage autodidacte et formation spécialisée, pour devenir le professionnel que je suis aujourd'hui.</p>
    <h2>Mes Compétences</h2>
    <p>En front-end :</p>
    <ul>
      <li>HTML, CSS, SASS pour des designs modernes et soignés</li>
      <li>JavaScript et React pour des interfaces dynamiques et interactives</li>
      <li>Figma pour le prototypage et la conception UI/UX</li>
    </ul>
    <p>En back-end :</p>
    <ul>
      <li>Node.js, Express.js pour des applications robustes et performantes</li>
      <li>SQL et PostgreSQL pour une gestion optimale des bases de données</li>
      <li>Développement d’API RESTful pour des intégrations fluides</li>
    </ul>
    <p>En administration système :</p>
    <ul>
      <li>Maîtrise de Linux, Git et GitHub pour une gestion efficace des projets et une collaboration sans faille</li>
    </ul>
    <p>En optimisation :</p>
    <ul>
      <li>Excellente maîtrise du SEO pour améliorer la visibilité des sites web</li>
      <li>Expertise en accessibilité pour garantir une expérience utilisateur inclusive et conforme aux normes.</li>
    </ul>
    <h2>Mes Passions</h2>
    <p>Au-delà du développement web, je suis passionné par la cybersécurité et l’intelligence artificielle. Ces domaines me fascinent par leur potentiel à transformer le monde tout en garantissant la sécurité des données et des utilisateurs. Je suis constamment en quête de nouvelles connaissances pour élargir mes horizons et intégrer ces technologies dans mes projets.</p>
    <h2>Pourquoi travailler avec moi ?</h2>
    <p> Chaque projet est une aventure unique, et je m’investis pleinement pour dépasser vos attentes.</p>
    <p>Polyvalence : Que ce soit pour un site vitrine, une application web ou une solution sur-mesure, je maîtrise un large éventail de technologies.</p>
    <p>Accessibilité : Sensibilisé à l’importance de l’inclusion numérique, je m’assure que vos projets soient accessibles à tous.</p>
    <p> Freelance, je suis flexible et réactif pour répondre à vos besoins dans les meilleurs délais.</p>
    <p>Merci de visiter mon portfolio ! Si vous souhaitez collaborer ou simplement discuter de vos idées, je serais ravi d'échanger avec vous. N'hésitez pas à me contacter, et construisons ensemble vos projets ambitieux.</p>
  </div>
</section>
<section id="skills">
  <h1>Mes Compétences</h1>
  
  <div className="icon-container">
            <div className="icon-wrapper">
              <img src="./image/figma.png" alt="figma"className='icon' />
              <img src="./image/linux.png" alt="linux" className='icon' />



              <img src="./image/html-5.png" alt="HTML5" className="icon" />
              <img src="./image/css-3.png" alt="CSS3" className="icon" />
              <img src="./image/js.png" alt="JavaScript" className="icon" />
              <img src="./image/icons8-réagir-40.png" alt="React" className="icon" />
              <img src="./image/nodejs.png" alt="Node.js" className="icon" />
              <img src="./image/serveur-sql.png" alt="SQL Server" className="icon" />
              <img src="./image/docker.png" alt="Docker" className="icon" />
              <img src="./image/developpement.png" alt="Développement" className="icon" />
            </div>
          </div>
        
  
</section>


      <section id="projects">
        <h1>Mes Projets</h1>
        <ul>
          <li>
          <video width="320" height="240" controls>
  <source src="/image/Vidéo sans titre ‐ Réalisée avec Clipchamp.mp4" type="video/mp4" />
</video>
            <h2>site e commerce full stack & accesible </h2>
          </li>
          <li>
            <img src=".\image\Capture d'écran 2024-11-03 133143.png" alt="Projet HTML CSS" />
            <h2>Site en HTML et CSS</h2>
          </li>
          <li>
          <video width="320" height="240" controls>
  <source src="/image/Enregistrement de l'écran 2024-12-27 125529.mp4" type="video/mp4" />
</video>
            <h2>systeme solaire fait en html css </h2>
          </li>
          <li>
          <video width="320" height="240" controls>
  <source src="/image/Enregistrement de l'écran 2024-10-11 204503.mp4" type="video/mp4" />
</video>
            <h2>Application de musique en JavaScript</h2>
          </li>

          <li>
            <img src="./image/Capture d'écran 2024-11-04 201018.png" alt="Projet HTML CSS" />
            <h2>calculatrice en javascript </h2>
          </li>

          <li>
            <img src="./image/Capture d'écran 2024-11-04 202122.png" alt="Projet HTML CSS" />
            <h2>contact formulaire  </h2>
          </li>
        </ul>
      </section>
    </main>

    <footer>
      <section id="contact-form">
        <h1>Contactez-moi</h1>
        <p>N'hésitez pas à me contacter...</p>
        <form className="form">
          <input type="text" className="input-field" placeholder="Nom" required />
          <input type="email" className="input-field" placeholder="Email" required />
          <textarea className="input-field" placeholder="Message" required></textarea>
          <button type="submit" className="sendMessage-btn">Envoyer</button>
        </form>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/ziad-bouhabbadi/" target="_blank" rel="noopener noreferrer">
            <img src="./image/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/ziadbouh" target="_blank" rel="noopener noreferrer">
            <img src="./image/github-logo-7880D80B8D-seeklogo.com.png" alt="LinkedIn" />
          </a>
        </div>
        <p className="mentions-legales">© 2023 Mon Portfolio. Tous droits réservés.</p>
      </section>
    </footer>
  </div>
  );
}


export default App;
