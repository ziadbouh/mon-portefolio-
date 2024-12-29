
import './App.css';

function App() {
  return (
    <div className="App">
     

    <header>
    <section className="banner">
       
        </section>
      <nav className="navbar">
        <ul>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#projects">Projets</a></li>
        </ul>
      </nav>
    </header>
 
    <main>
    
    <h1 id="titre">Bienvenue sur mon portfolio !</h1>
      <section id="about">
       <h1> a propos de moi !</h1>
        <p className="p">Bonjour et bienvenue sur mon portfolio !
        Je m'appelle Ziad, et je suis actuellement en formation de développeur web et web mobile, avec une spécialisation en accessibilité. Mon parcours est un peu atypique, mais chaque étape m'a rapproché de ce domaine passionnant.
        <br />
        Au départ, j'ai fait des etudes dans la logistique, mais je ne me sentais pas totalement épanoui. Lors d'une formation, j'ai eu l'opportunité de faire un stage, et c'est là que j'ai découvert le monde du développement web. Ce fut une révélation, et depuis, je me suis lancé dans l'apprentissage des langages de programmation en autodidacte. <br />
        <br />
        Aujourd'hui, j'ai développé des compétences solides en HTML, CSS, JavaScript, Node.js, React, SQL, et bien plus encore. Bien que je sois plus à l'aise en front-end, je continue de me former en back-end pour devenir un développeur polyvalent.

En plus du développement web, la cybersécurité et l'intelligence artificielle me passionnent. J'adore explorer comment ces technologies peuvent transformer notre monde et renforcer la sécurité des applications et des données. Chaque projet est pour moi une occasion de progresser et d'approfondir mes compétences.

Le développement web est bien plus qu'un métier : c'est une véritable passion qui me pousse à me dépasser chaque jour. Merci de visiter mon portfolio, et n'hésitez pas à me contacter pour échanger sur nos intérêts communs !

</p>
      </section>

      <section id="skills">
        <h1>Mes Compétences</h1>
        <div className="skillsContainer">
          <div className="skill"><img src="./image/html-5.png" alt="HTML5" /></div>
          <div className="skill"><img src="./image/css-3.png" alt="CSS3" /></div>
          <div className="skill"><img src="./image/js.png" alt="JavaScript" /></div>
          <div className="skill"><img src="./image/icons8-réagir-40.png" alt="React" /></div>
          <div className="skill"><img src="./image/nodejs.png" alt="Node.js" /></div>
          <div className="skill"><img src="./image/serveur-sql.png" alt="SQL Server" /></div>
          <div className="skill"><img src="./image/docker.png" alt="Docker" /></div>
          <div className="skill"><img src="./image/developpement.png" alt="Développement" /></div>
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
