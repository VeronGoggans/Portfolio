import { timeAgo } from "./util.js";



export const homeTemplate = `
    <section class="home">
        <div class="home-content">
            <h1>Hi, I'm Verôn Goggans</h1>
            <h3>Backend Developer</h3>
            <p>Currently studying at Hogeschool Utrecht 
            for my Bachelors Degree Backend Developer</p>
            <div class="btn-box">
                <a href="https://www.linkedin.com/in/veron-goggans-48331b19b/"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/VeronGoggans/"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </section>
`

export const aboutTemplate = `
    <section class="about">
            <div class="about-content">
                <h1>About <span>me</span></h1>
                <h3>Backend Developer</h3>
                <p>I am a dedicated Backend Developer from the Netherlands, currently pursuing a Bachelor's degree in Software Engineering at Hogeschool Utrecht. Beyond my studies, I have a strong passion for working on personal projects, where I continually refine my skills and explore new technologies.</p>
    
                <h3 class="journey-heading">My <span>Journey</span></h3>
                <div class="timeline">
                    <div class="container left-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg">
                        <div class="text-box">
                            <h2>Python</h2>
                            <small>2022 - Now</small>
                            <p>Like many others, I began learning Python during my first year of school to grasp the fundamentals of programming.</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container right-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg">
                        <div class="text-box">
                            <h2>Java</h2>
                            <small>2022 - Now</small>
                            <p>After mastering the basics of programming, I transitioned to learning Java, which introduced me to the object-oriented programming (OOP) paradigm. This is also the language my school will focus on for the remainder of my studies.</p>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container left-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/spring/spring-original.svg">
                        <div class="text-box">
                            <h2>Springboot</h2>
                            <small>2022 - Now</small>
                            <p>I used Java to develop APIs, leveraging the popular Spring Boot framework to efficiently handle this task. Spring Boot's robust features and ease of use made it an ideal choice for building scalable and maintainable APIs.</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container right-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postman/postman-original.svg">
                        <div class="text-box">
                            <h2>Postman</h2>
                            <small>2022 - Now</small>
                            <p>When developing APIs, testing the endpoints is a crucial aspect of the process. For this purpose, I rely on Postman, which allows me to efficiently test and debug API endpoints to ensure they function as expected.</p>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container left-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/postgresql/postgresql-plain.svg">
                        <div class="text-box">
                            <h2>Posgressql</h2>
                            <small>2022 - Now</small>
                            <p>As a backend developer, having a solid understanding of databases is essential. PostgreSQL was the first database I learned, starting with basic queries and progressing to more complex ones</p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container right-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/git/git-original.svg">
                        <div class="text-box">
                            <h2>Git</h2>
                            <small>2022 - Now</small>
                            <p>Throughout all my school and personal projects, I rely on Git for version control to manage changes and keep my code securely stored. Git has been essential in tracking progress, collaborating with others, and ensuring the safety of my work.</p>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container left-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg">
                        <div class="text-box">
                            <h2>HTML</h2>
                            <small>2022 - Now</small>
                            <p> HTML was introduced in both my first and second years of school, 
                                though it was never the main focus. I truly became comfortable with HTML while developing my note-taking app, Neutron.
                                 </p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container right-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg">
                        <div class="text-box">
                            <h2>CSS</h2>
                            <small>2022 - Now</small>
                            <p>CSS was also not a major focus in school, so I became comfortable with it primarily during the development of Neutron. This project provided the practical experience I needed to enhance my CSS skills.</p>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container left-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg">
                        <div class="text-box">
                            <h2>Javascript</h2>
                            <small>2022 - Now</small>
                            <p>Javascript is another language that I got a good grasp on during development of Neutron. <br><br>
                                I learned frondend paradigms like 
                                <ul>
                                    <li>MVC (Modal, View, Controller)</li>
                                    <li>SPA (Single Page Application)</li>
                                </ul>
                            </p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>

                    <div class="milestone right-container">
                        <div class="dot"></div>
                        <div class="text-box">
                            <h2>Milestone</h2>
                            <small>2022 - 2023</small>
                            <h2 class="title">End of School year 1</h2>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container left-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/figma/figma-original.svg">
                        <div class="text-box">
                            <h2>Figma</h2>
                            <small>2023 - Now</small>
                            <p>I began using Figma when I worked on a team project for a company called KPN. 
                                We used Figma to design the frontend and collaborate effectively with the team, allowing us to share ideas, iterate on designs, and ensure a cohesive user experience.
                            </p>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>

                    <div class="container right-container">
                        <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-plain.svg">
                        <div class="text-box">
                            <h2>MongoDB</h2>
                            <small>2023 - Now</small>
                            <p>MongoDB, a NO-SQL database, was the second database I had to learn, during a project while working for a company called HydroNet</p>
                            <span class="right-container-arrow"></span>
                        </div>
                    </div>

                    <div class="milestone left-container">
                        <div class="dot"></div>
                        <div class="text-box">
                            <h2>Milestone</h2>
                            <small>2023 - 2024</small>
                            <h2 class="title">End of School year 2</h2>
                            <span class="left-container-arrow"></span>
                        </div>
                    </div>

                    

                </div>
                <h3 class="skills-heading">Programming <span>Languages</span></h3>
    
                <table>
                    <tr>
                        <th>Language</th>
                        <th>Experience</th>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>${timeAgo("2022-09-01")}</td>
                    </tr>
                    <tr>
                        <td>Java</td>
                        <td>${timeAgo("2023-02-01")}</td>
                    </tr>
                    <tr>
                        <td>Javascript</td>
                        <td>${timeAgo("2023-02-01")}</td>
                    </tr>
                    <tr>
                        <td>HTML</td>
                        <td>${timeAgo("2023-02-01")}</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>${timeAgo("2023-02-01")}</td>
                    </tr>
                </table>

                
                <h3 class="experience-heading">Experience working with <span>databases</span></h3>
                <div class="experience-container">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/postgresql/postgresql-plain.svg">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/sqlite/sqlite-original.svg">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mongodb/mongodb-plain.svg">
                </div>
                <h3 class="experience-heading">Experience working with <span>web frameworks</span></h3>
                <div class="experience-container">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/spring/spring-original-wordmark.svg">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/express/express-original-wordmark.svg">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/fastapi/fastapi-original-wordmark.svg">
                </div>

                <h3 class="experience-heading">Experience working with other <span>technologies</span></h3>
                <div class="experience-container">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/git/git-original.svg">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/postman/postman-original.svg">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/figma/figma-original.svg">
                </div>
            </div>
        </section>

`

export const portfolioTemplate = `
    <section class="portfolio">
            <div class="portfolio-content">
                <h1>My <span>Projects</span></h1>
                <div class="project-display">
                    <div class="project">
                        <h2>Photon</h2>
                        <button class="read-more-btn" id="project1">Read more</button>
                    </div>
                    <div class="project">
                        <h2>SnipVault</h2>
                        <button class="read-more-btn" id="project2">Read more</button>
                    </div>
                    <div class="project empty">
                        <h2>Empty</h2>
                    </div>
                    <div class="project empty">
                        <h2>Empty</h2>
                    </div>
                </div>
    
                <div class="project-container">
                    <h2 class="project-title" id="project1">Photon</h2>
                    <hr>
                    <p>Photon is a streamlined note taking app designed with simplicity and modern aesthetics in mind. It's minimalist interface aims to provide a calm and focused environment for an effortless note taking experience. 
                        <br>
                        <br>
                        <span class="disclaimer">Photon is still in development and is not a finished product.</span
                    </p>
                    <img class="project-image" src="img/photon/folder.png" alt="Photon folder image">
                    <article>
                        <b>Notes tab</b>
                        <p>
                            In the image above, you'll see the Notes tab, currently open inside a folder called 'Exam 1.' Here, users can add both folders and notes. Folders can be assigned a specific color or left with the default color, and notes can be bookmarked, which will move them to the top of the list. 
                            <br>
                            <br>
                            At the top, there's a search bar where users can look up any note or folder. The search bar includes prefix autocomplete, offering suggestions as you type.
                        </p>
                    </article>

                    <img class="project-image" src="img/photon/editor.png" alt="Photon editor image">

                    <article>
                        <b>Editor tab</b>
                        <p>The Photon editor support full rich text support with common features like</p>
                        <ul>
                            <li>Rich text editing e.g bold, italic, underline, strikethrough</li>
                            <li>Links (with custom text)</li>
                            <li>Align text left, right and center</li>
                            <li>Bullet, numbered lists and check lists</li>
                            <li>Colorize text</li>
                            <li>Remove formatting</li>
                            <li>Undo/redo</li>
                            <li>Headings 1 through 4</li>
                          </ul>
                        <p>Among other things like loading in templates, creating flashcards from your notes and referencing other notes. </p>
                        
                         
                    </article>
                    <article class="tech-stack-info">
                        <h3>Tech stack</h3>
                        <hr>
                        <div class="stack">
                            <span>Frontend</span>
                            <div>Javascript, html and css</div>
                        </div>
                        <div class="stack">
                            <span>Backend</span>
                            <div>Python and FastAPI</div>
                        </div>
                        <div class="stack">
                            <span>Persistence</span>
                            <div>Sqlite</div>
                        </div>
                    </article>
                    <a class="find-out-more-btn" href="https://github.com/VeronGoggans/Note-taking-app">Find out more!</a>
                </div>

                <div class="project-container">
                    <h2 class="project-title" id="project2">SniptVault</h2>
                    <hr>
                    <p>Snipvault is an app designed to store all your code snippets in one convenient place. You can easily tag each snippet, making categorized searches quick and simple. With its minimalist design, Snipvault aims to provide a smooth and enjoyable user experience.
                        <br>
                        <br>
                        <span class="disclaimer">SnipVault is still in development and is not a finished product.</span
                    </p>
                    <img class="project-image" src="img/snipvault/search.png" alt="SnipVault search image">
                    <article>
                        <b>The search page</b>
                        <p>As mentioned above, SnipVault allows users to add an unlimited number of tags to any given snippet. In the image above, a search is performed using the tags <b>#css</b> and <b>#animation</b>. This query will return all snippets that include at least those two tags.
                            <br>
                            <br>
                            You can also search for snippets by their name without using the # symbol. The name doesn’t have to be an exact match; for example, a search like <b>"css animation"</b> will return all snippets containing those words in it's name.
                        </p>
                    </article>

                    <img class="project-image" src="img/snipvault/snippet.png" alt="SnipVault snippet image">

                    <article>
                        <b>Snippet page</b>
                        <p>
                            On the snippet page, you can paste your snippet into a code editor-style environment with several options. You can copy the snippet by clicking the copy button, expand the editor with the expand button, or add multiple tabs by clicking the plus button next to the initial tab's name. 
                            <br>
                            <br>
                            Below the snippet section, you can add tags to categorize the snippet. Once you're finished, click the save button in the upper right corner.
                        </p>
                    </article>
                    <article class="tech-stack-info">
                        <h3>Tech stack</h3>
                        <hr>
                        <div class="stack">
                            <span>Frontend</span>
                            <div>Javascript, html and css</div>
                        </div>
                        <div class="stack">
                            <span>Backend</span>
                            <div>Express js</div>
                        </div>
                        <div class="stack">
                            <span>Persistence</span>
                            <div>Sqlite</div>
                        </div>
                    </article>
                    <a class="find-out-more-btn" href="https://github.com/VeronGoggans/SnipVault">Find out more!</a>
                </div>
            </div>
            
        </section>
`

export const contactTemplate = `
    <section class="contact">
        <h1>Contact <span>me</span></h1>
        <p>Feel free to contact me on the gmail address shown below.</p>
        <hr>
        <div class="gmail-container">
            <img src="img/gmail-image.webp" alt="Gmail image">
            <div>
                <h2 class="get-in-touch">Get in touch</h2>
                <div class="my-email-container">
                    <i class="fa-regular fa-envelope"></i>
                    <b>Email</b>
                    <p>veron.goggans1@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
`

export const templates = {
    home: homeTemplate,
    about: aboutTemplate,
    portfolio: portfolioTemplate,
    contact: contactTemplate
} 