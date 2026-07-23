const About = () => {
  return (
    <section className="min-h-screen w-full p-primary-padding flex flex-col" id="about">
      <h2 className="text-6xl lg:text-9xl md:text-8xl sm:text-7xl font-bold text-foreground w-full py-10">
        About
      </h2>
      <div className="w-full flex flex-col-reverse lg:flex-row md:flex-col-reverse gap-5">
        <div className="w-full lg:w-3/5 md:w-full sm:w-full text-sm lg:text-xl md:text-lg font-semibold text-primary-text flex flex-col gap-5">
          <p>
            I'm a web developer focused on building clean, responsive, and
            performant web applications. I enjoy working with modern JavaScript
            and have hands-on experience using React, Node.js, Express, and
            MongoDB to build real-world projects.
          </p>
          <p>
            Outside of development, I enjoy learning new technologies and
            improving my problem-solving skills through practice and projects.
          </p>
          <p>
            Currently, I'm preparing for software development internships where
            I can contribute to real products, learn from youtube, ChatGPT and grow as a Devloper by working on meaningful
            Project.
          </p>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center">
          <img
            src="/musharraf.png"
            alt="Musharraf"
            className="w-65 rounded-2xl lg:translate-y-[-40%] shadowimage transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
