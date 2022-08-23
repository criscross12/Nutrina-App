import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import the icons you need
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => console.log(data);

  /** Input field component */
  const Input = ({ label, required, type, placeholder }) => (
    <div>
      <legend>{label}</legend>
      <input
        {...register(label, { required })}
        className={errors[label] && styles.inputInvalid}
        type={type}
        placeholder={placeholder}
      />
      {errors[label] && <span>mandatory</span>}
    </div>
  );

  /** Group the person input fields in a component */
  const PersonFields = () => (
    <section className={styles.inputGroup}>
      <h3>Personal information</h3>
      <Input
        label="Full name"
        required
        type="text"
        placeholder="Ex: Maria Leopoldina de Habsburgo"
      />
      <Input label="Birthday" required type="date" placeholder="dd/mm/aaa" />
    </section>
  );

  /** Group the contact input fields in a component */
  const ContactFields = () => (
    <section className={styles.inputGroup}>
      <h3>Contact</h3>
      <Input
        label="Email"
        required
        type="email"
        placeholder="exemple@exemple.com"
      />
      <Input label="Phone" required type="tel" placeholder="(00) 0.0000-0000" />
    </section>
  );

  /** Group the address input fields in a component */
  const AddressFields = () => (
    <section className={styles.inputGroup}>
      <h3>Address</h3>
      <Input
        label="Street"
        required
        type="text"
        placeholder="Street name, avenue, etc..."
      />
      <Input label="Number" required type="number" placeholder="000" />
    </section>
  );

  /** Nnavigation between steps */
  const rightArrow =
    "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345";
  const leftArrow =
    "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363";

  const Navigation = () => (
    <section className={styles.navigationControls}>
      {step === fieldGroups.length - 1 && (
        <button
          type="submit"
          className={styles.submitButton}
          disabled={!isValid}
        >
          SAVE
        </button>
      )}
      {step < fieldGroups.length - 1 && (
        <button
          type="button"
          className={styles.nextButton}
          disabled={!isValid}
          onClick={() => {
            setStep(step + 1);
          }}
        >
          <img src={rightArrow} />
          NEXT
        </button>
      )}
      {step > 0 && (
        <button
          type="button"
          className={styles.backButton}
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <img src={leftArrow} />
          BACK
        </button>
      )}
    </section>
  );

  /** Mark the input group already filled as blue or gray if not */
  const Reference = () => (
    <footer className={styles.reference}>{renderMarkers()}</footer>
  );
  function renderMarkers() {
    let markers = [];
    for (let i = 0; i < fieldGroups.length; i++)
      markers.push(
        <span className={step >= i ? styles.markerBlue : styles.markerGray} />
      );
    return markers;
  }

  const [step, setStep] = useState(0);

  const fieldGroups = [<PersonFields />, <ContactFields />, <AddressFields />];

  function handleClick() {
    const btn = document.querySelector(".mobile-menu-button");
    const sidebar = document.querySelector(".sidebar");

    btn.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
    });
  }

  return (
    <div className="relative min-h-screen md:flex">
      {/* Mobile menu */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <Link href="/">
          <a className="block py-4 text-white font-bold">
            <h5 className="">NUTRIÑA</h5>
          </a>
        </Link>

        <button
          onClick={handleClick}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}

      <div className="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-5 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <Link href="/">
          <a className="text-white flex items-center space-x-2">
            <FontAwesomeIcon
              className=" h-9 w-8"
              icon={faAppleAlt}
              style={{ fontSize: 25, color: "white" }}
            />
            <span className="text-2xl font-extrabold">NUTRIÑA</span>
          </a>
        </Link>
        <nav>
          <Link href="/">
            <a className="block py-2.5 5 px-4 rounded-br-2xl transition duration-200 hover:bg-orange-400 hover:text-white">
              <h5 className="">NUTRIÑA</h5>
            </a>
          </Link>
          <Link href="/">
            <a className="block py-2.5 5 px-4 rounded-br-2xl transition duration-200 hover:bg-orange-400 hover:text-white">
              <h5 className="">NUTRIÑA</h5>
            </a>
          </Link>
        </nav>
      </div>
      <div className="p-10 font-light container mx-auto px-4 md:px-10">
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <h2>User Register</h2>
          {fieldGroups[step]}
          <Navigation />
          <Reference />
        </form>
      </div>
    </div>
  );
}
