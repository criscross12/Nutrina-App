import React from "react";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const posts = () => {
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
      {errors[label] && <span>Requerido</span>}
    </div>
  );

  /** Group the person input fields in a component */
  const PersonFields = () => (
    <section className={styles.inputGroup}>
      <h3>Datos Generales del paciente</h3>
      <Input 
        label="Nombre completo"
        required
        type="text"
        placeholder="Ex: Maria Leopoldina de Habsburgo"
      />
      <Input
        label="Apellido Paterno"
        required
        type="text"
        placeholder="Ejem: Leopoldina"
      />   
      <Input
        label="Apellido Materno"
        required
        type="text"
        placeholder="Ejem: de Habsburgo"
      />   
      <Input
        label="Fecha de Nacimiento"
        required
        type="date"
        placeholder="dd/mm/aaa"
      />
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

  return (
    <Layout>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h2>Registro de Pacientes</h2>
        <img src="nutrina1.png" class="absolute right-0 top-0 w-22 h-24"></img>
        {fieldGroups[step]}
        <Navigation />
        <Reference />
      </form>
    </Layout>
  );
};

export default posts;
