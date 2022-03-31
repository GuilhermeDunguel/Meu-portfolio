// https://api.github.com/users/GuilhermeDunguel/repos

function getAPI() {
   fetch('https://api.github.com/users/GuilhermeDunguel/repos')
   .then(async result => {
      if(!result.ok) {
         throw new Error(result.status)
      }
      var data = await result.json()
      console.log(data)
      data.map(project => {
         const locateDiv = document.querySelector('#projects-section')
         console.log(project.html_url)
         if(project.name != 'guilhermedunguel'){
            console.log(project.name)
            locateDiv.innerHTML += `
         <div class='project-div ${project.name}-div'>
            <h2 id="projectname">${project.name.replace('-', ' ').replace('-', ' ')}<h2>
            <p id="projectlang">${project.language}</p>
            <button id="projectButton"><a href="${project.html_url}" target="_blank">Ver mais</a></button>
            <div id="project-bg"></div>
         </div>
         <style>
         .project-div {
            color: white;
         }

         #projectname {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 30px;
            font-weight: 900;
         }
         #projectlang {
            position: absolute;
            bottom: 20px;
            left: 20px;
            font-weight: 500;
         }

         #projectButton {
            position: absolute;
            bottom: 20px;
            right: 20px;
            border: none;
            background-color: white;
            padding: 10px 20px;
            border-radius: 2000px;
            font-weight: 600;
            transition: 0.2s
         }
         #projectButton a {
            color: black;
            text-decoration: none;
         }
         #projectButton:hover {
            cursor: pointer;
            background-color: #fdc82c;
            box-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
            transform: scale(1.1)
         }
         </style> 
         `
         }
      })
   }).catch(error => console.log(error))
}
getAPI()
