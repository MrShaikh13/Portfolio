import { useState } from "react";
import { projectService } from "../../services/projectService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
}

function validateForm(formData) {
  const trimmedEmail = formData.email.trim();

  return {
    name: formData.name
      ? formData.name.length >= 2
        ? formData.name.length <= 20
          ? ""
          : "Name must be less then 20 characters."
        : "Name must be at least 2 characters."
      : "Name is required.",
    email: trimmedEmail
      ? isValidEmail(trimmedEmail)
        ? ""
        : "Please enter a valid email address."
      : "Email is required.",
    message: formData.message
      ? formData.message.length >= 10
        ? ""
        : "message must be at least 10 characters."
      : "message is required.",
  };
}

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submited, setSubmited] = useState(false);
  const [count, setCount] = useState(6);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const nextFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(nextFormData);

    if (hasSubmitted) {
      setErrors(validateForm(nextFormData));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = validateForm(formData);

    setHasSubmitted(true);
    setErrors(nextErrors);

    //Error check
    if (Object.values(nextErrors).some(Boolean)) {
      setIsSubmitting(false);
      return;
    }

    // Success
    setHasSubmitted(false);
    setErrors({});

    try {
      setIsSubmitting(true);
      const response = await projectService.sendMessage(formData);
      toast.success("Message sent successfully ✅");
      setSubmited(true);
      let timer = 6;
      const interval = setInterval(() => {
        timer--;
        setCount(timer);
        if (timer === 0) {
          clearInterval(interval);
          setSubmited(false);
          navigate("/");
        }
      }, 1000);
      setSuccess("Message sent successfully ✅");
      setFormData(initialForm);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row gap-5 px-primary-padding" id="contact">
      <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10 mt-2 lg:mb-20">
        <div className="w-full">
          <h2 className="text-foreground text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl">
            Contact
          </h2>
          <p className="text-primary-text">
            I'm currently open to internship opportunities and collaborations.
            Feel free to reach out if you'd like to connect or discuss anything.
          </p>
        </div>
        <div className="bg-card shadowbox flex flex-col h-full lg:h-1/3 gap-2 p-5 rounded-lg">
          <div>
            <label className="text-foreground">Email: </label>
            <a
              className="text-secondary"
              target="_blank"
              href="https://musharrafr87@gmail.com"
            >
              musharrafr87@gmail.com
            </a>
          </div>
          <div>
            <label className="text-foreground">GitHub: </label>
            <a
              className="text-secondary"
              target="_blank"
              href="https://github.com/MrShaikh13"
            >
              github.com/MrShaikh
            </a>
          </div>
          <div>
            <label className="text-foreground">Linkedin: </label>
            <a
              className="text-secondary"
              target="_blank"
              href="https://www.linkedin.com/in/musharraf-shaikh-32b901284"
            >
              linkedin.com/in/musharraf
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full lg:h-3/4 p-5 bg-card shadowbox rounded-xl mt-1 lg:mt-40">
        <h2 className="text-foreground text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl mb-5">
          Send a Message
        </h2>
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-foreground">Name</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="outline-none focus:ring focus:ring-[#646cff] hover:border-[#646cff] hover:border rounded-md bg-sec-background p-1 px-2 w-full"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div>
            <h3 className="text-foreground">Email</h3>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="outline-none focus:ring focus:ring-[#646cff] hover:border-[#646cff] hover:border rounded-md bg-sec-background p-1 px-2 w-full"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div>
            <h3 className="text-foreground">Message</h3>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-sec-background focus:outline-none focus:ring focus:ring-[#646cff] hover:border hover:border-[#646cff] rounded-lg p-1 px-2"
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`disabled:opacity-50 disabled:cursor-not-allowed bg-white text-black px-4 py-2 rounded-2xl max-sm:min-w-2/5 w-1/4 active:scale-95 transition-all cursor-pointer`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {success && <p className="text-green-500">{success}</p>}
        </form>
      </div>
      {submited && (
        <div className="fixed inset-0 flex flex-col items-center justify-evenly bg-black/70 backdrop-blur-sm z-100">
          <div className="bg-white py-5 px-15 rounded-lg flex flex-col items-center gap-5">
            <p className="text-black text-xl">Thank you for your message 🥰</p>
            <p className="text-green-500 text-xl">Message sent successfully!</p>
            <p className="text-red-600 text-xl">Redirecting to home page in</p>
          </div>
          <div className="bg-white w-100 h-100 py-25 rounded-full flex items-center justify-center">
            <span className="text-red-600 font-bold text-[300px]">{count}</span>
            <span className="text-red-500 self-end text-xl"> second...</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
