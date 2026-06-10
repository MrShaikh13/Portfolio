const Resume = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-20 px-primary-padding my-10">
      <div className="w-full">
        <h2 className="text-foreground text-2xl font-bold lg:font-bold md:text-3xl lg:text-5xl ">
          Resume
        </h2>
        <p className="text-sm lg:text-xl md:text-lg font-semibold text-primary-text lg:font-medium mb-8">
          Web developer with hands-on experience building responsive web
          applications using React, Node.js, and modern JavaScript. Focused on
          writing clean code, learning core concepts deeply, and improving
          through real-world projects. Currently seeking a software development
          internship.
        </p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
          <article className="shadowbox bg-card p-5 rounded-2xl flex flex-col gap-2">
            <h3 className="text-xl font-bold text-foreground">Skills</h3>
            <div className="px-4 text-sm lg:text-base font-semibold text-secondary">
              <p>
                <span className="text-foreground text-base">Frontend:</span>
                HTML, CSS, JavaScript, React
              </p>
              <p>
                <span className="text-foreground text-base">Backend:</span>
                Node.js, Express, API Developer
              </p>
              <p>
                <span className="text-foreground text-base">Databases:</span>
                MongoDB
              </p>
              <p>
                <span className="text-foreground text-base">Tools:</span> Git,
                GitHub, VS Code, Cursor
              </p>
              <p>
                <span className="text-foreground text-base">
                  Core Concepts:
                </span>
                REST API, state management, responsive design, CRUD Operations,
                JavaScript fundamentals, basic DSA
              </p>
            </div>
          </article>
          <article className="bg-card p-5 rounded-2xl shadowbox flex flex-col gap-2">
            <h3 className="text-xl font-bold text-foreground">Education</h3>
            <div className="px-1 text-sm lg:text-base font-semibold text-secondary">
              <p>
                <span className="text-foreground text-base">
                  Bachelor of Computer Application (BCA) - (Ongoing):
                </span>
              </p>
              <p>
                Relevant coursework: Data Structures, Web Development,
                Programming Fundamentals
              </p>
            </div>
          </article>
          <article className="bg-card p-5 rounded-2xl shadowbox">
            <h3 className="text-xl font-bold text-foreground">
              Learning & Growth
            </h3>
            <ul className="text-sm lg:text-base font-semibold text-secondary list-disc list-inside">
              <li>Regularly practice problem-solving and coding challenges</li>
              <li>Build personal projects to apply new concepts</li>
              <li>Actively learning modern web development best practices</li>
            </ul>
          </article>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <h2 className="text-foreground textShadow text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl ">
          Projects & Hands-on Experience
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-5 gap-4 lg:min-h-[calc(100vh-5rem)] lg:[grid-template-areas:'box1_box1_box2_box2_box2''box1_box1_box2_box2_box2''box1_box1_box4_box5_box5''box3_box3_box4_box5_box5''box3_box3_box4_box5_box5']">
          <article className="bg-card shadowbox min-h-70 rounded-2xl p-5  lg:[grid-area:box1]">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold text-foreground">
                WEB DEVELOPMENT
              </h3>
              <p className="text-primary-text font-semibold mt-3 max-w-sm text-sm lg:text-base leading-6">
                Practicing modern web development using React, Next.js, Node.js,
                HTML, CSS, and JavaScript. Building responsive, fast, and secure
                web applications while following industry best practices for
                performance, scalability, and clean code architecture.
                Continuously improving frontend and backend development skills
                through hands-on projects and learning.
              </p>
            </div>
          </article>
          <article className="bg-card shadowbox min-h-50 flex flex-col items-center justify-center rounded-2xl p-5 lg:[grid-area:box2] ">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-bold text-lg md:text-xl lg:text-2xl">
                Chatbot App
              </h3>
              <p className="text-primary-text font-semibold text-sm lg:text-base md:text-base sm:text-base">
                Built a full-stack AI chatbot with multi-session support,
                persistent message storage, and robust frontend state
                management. Implemented REST APIs with Express, integrated an AI
                language model for responses, and used MongoDB Atlas to store
                chat history across sessions.
              </p>
              <p>React • Node.js • Express • MongoDB • OpenAI API</p>
              <div className="flex gap-5">
                <a
                  target="_blank"
                  href="https://github.com/MrShaikh13/mern-chatbot"
                  className="text-blue-700 hover:text-blue-900 hover:drop-shadow-lg "
                >
                  View on GitHub
                </a>
                <a
                  target="_blank"
                  href="https://mern-chatbott.netlify.app"
                  className="text-green-700 hover:text-green-900 hover:drop-shadow-lg "
                >
                  View on Project
                </a>
              </div>
            </div>
          </article>
          <article className="bg-card shadowbox min-h-60 rounded-2xl border p-5 lg:[grid-area:box3]">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-bold text-lg md:text-xl lg:text-2xl">
                Ecommerce Website
              </h3>
              <p className="text-primary-text font-semibold text-sm lg:text-base md:text-base sm:text-base line-clamp-none lg:line-clamp-5 ">
                An Amazon-style e-commerce frontend built using HTML, CSS, and
                JavaScript, featuring product browsing, cart management,
                checkout flow, and order tracking. Emphasizes responsive design,
                clean UI structure, and interactive user experiences without
                relying on frameworks.
              </p>
              <p>HTML • CSS • JavaScript</p>
              <p className="text-blue-900 hover:text-blue-900 hover:drop-shadow-lg cursor-pointer">
                Work is currently underway on this Project.
              </p>
            </div>
          </article>
          <article className="bg-card shadowbox min-h-60 rounded-2xl border p-5 lg:[grid-area:box4]">
            <div className="flex flex-col gap-1">
              <h3 className="text-foreground font-bold text-lg md:text-xl lg:text-2xl">
                Personal Portfolio Website
              </h3>
              <p className="text-primary-text font-semibold text-sm lg:text-base md:text-base sm:text-base line-clamp-none lg:line-clamp-5 ">
                Designed and built a responsive portfolio website to showcase
                projects, skills, and resume with a focus on clean UI and
                performance.
              </p>
              <p className="line-clamp-none lg:line-clamp-1">
                HTML • CSS • JavaScript
              </p>
              <a
                target="_blank"
                href="https://github.com/MrShaikh13/Portfolio"
                className="text-blue-700 hover:text-blue-900 hover:drop-shadow-lg "
              >
                View on GitHub
              </a>
            </div>
          </article>
          <article className="bg-card relative shadowbox min-h-60 rounded-2xl border p-5 lg:flex justify-center items-center  hidden lg:[grid-area:box5]">
            <img
              src="./iam.png"
              alt="Musharraf Shaikh"
              className="w-full mx-auto object-cover"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Resume;
