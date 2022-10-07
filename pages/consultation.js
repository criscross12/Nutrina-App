import React from "react";
import { Textarea } from "@nextui-org/react";
import Layout from "../components/layout";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { datahelp, dataUser } from "../utils/index";
import { useRouter } from "next/router";

const posts = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    const user = await fetch("http://localhost:5000/patients", {
      method: "POST",
      body: JSON.stringify(dataUser(data)),
      headers: {
        "Content-Type": "application/json",
      },
    });
    data;
    const resUser = await user.json();
    console.log("User: ", resUser["uuid"]);
    const response = await fetch(
      "http://localhost:5000/medical-consultation/medical-consultation",
      {
        method: "POST",
        body: JSON.stringify(datahelp(data, resUser)),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    console.log(res);
    push("/finalConsultation");
  };

  /** Input field component */
  const Input = ({ name, label, required, type, placeholder }) => (
    <div>
      <legend>{label}</legend>
      <input
        name={name}
        {...register(name, { required })}
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
        <Input
          name="name"
          label="Nombre (s):"
          required
          type="text"
          placeholder="Ex: Maria"
        />
        <Input
          name="first_name"
          label="Apellido Paterno:"
          required
          type="text"
          placeholder="Ejem: Aguilar"
        />
        <Input
          name="second_name"
          label="Apellido Materno:"
          required
          type="text"
          placeholder="Ejem: Nava"
        />
        <Input
          name="date_of_birth"
          label="Fecha de Nacimiento:"
          required
          type="date"
          placeholder="dd/mm/aaa"
        />
        {/*TODO HTML input email ??  */}
        <Input
          name="email"
          label="Email:"
          required
          type="email"
          placeholder="Ejem: user@gmail.com"
        />
        <Input
          name="ocupation"
          label="Ocupación:"
          required
          type="text"
          placeholder="Ejem: Obrero"
        />
        <Input
          name="phone"
          label="Número telefónico:"
          required
          type="text"
          placeholder="Ejem: 7131008956"
        />
        <Input
          name="reason"
          label="Motivo de la consulta:"
          required
          type="text"
          placeholder="Ejem: *******"
        />
        <Input
          name="sex"
          label="Sexo:"
          required
          type="text"
          placeholder="Ejem: Masculino"
        />
      </div>
    </section>
  );

  /** Group the contact input fields in a component */
  const ContactFields = () => (
    <section className={styles.inputGroup}>
      <h3>Mediciones básicas</h3>
      <Input
        name="weight"
        label="Peso:"
        required
        type="number"
        placeholder="80"
      />
      <Input
        name="height"
        label="Estatura:"
        required
        type="number"
        placeholder="180"
      />
      <Input
        name="waist"
        label="Cintura:"
        required
        type="number"
        placeholder="##"
      />
      <Input
        name="hip"
        label="Cadera:"
        required
        type="number"
        placeholder="##"
      />
    </section>
  );

  /** Group the address input fields in a component */
  const AddressFields = () => (
    <section className={styles.inputGroup}>
      <h3>Composición corporal</h3>
      <Input
        name="fat_percentage"
        label="% grasa corporal:"
        required
        type="number"
        placeholder="##"
      />
      <Input
        name="visceral_fat_percentage"
        label="% grasa visceral:"
        required
        type="number"
        placeholder="##"
      />
      <Input
        name="muscle_mass_percentage"
        label="% masa muscular:"
        required
        type="number"
        placeholder="##"
      />
      <Input
        name="body_age"
        label="Edad corporal"
        required
        type="number"
        placeholder="##"
      />
    </section>
  );

  /** Group the vital sings input fields in a component */
  const VitalSignsFields = () => (
    <section className={styles.inputGroup}>
      <h3>Signos vitales</h3>
      <Input
        name="capillary_glucose"
        label="Glucosa Capilar:"
        required
        type="number"
        placeholder="##"
      />
      <Input
        name="heart_rate"
        label="Frecuencia Cardiaca:"
        required
        type="number"
        placeholder="##"
      />
      <Input
        name="blood_pressure"
        label="Tensión arterial"
        required
        type="number"
        placeholder="##"
      />
    </section>
  );

  /** Group the vital sings input fields in a component */
  const PlyometricFields = () => (
    <section className={styles.inputGroup}>
      <h3>Mediciones plicometricas</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
        <Input
          name="pl_triceps"
          label="Pl Triceps:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pl_subscapular"
          label="Pl Subescapular:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pl_biceps"
          label="Pl Biceps:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pl_iliac_crest"
          label="Pl Cresta iliaca:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pl_supraspinal"
          label="Pl Supraespinal:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pl_abdominal"
          label="Pl Abdominal:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pl_thigh"
          label="Pl Muslo:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pl_leg"
          label="Pl Pierna:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pr_relaxed_arm"
          label="PR Brazo relajado:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pr_flexed_arm"
          label="PR Brazo flexionado:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pr_mid_thigh"
          label="PR Muslo medio:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="pr_leg"
          label="PR Pierna:"
          required
          type="number"
          placeholder="##"
        />
      </div>
    </section>
  );

  const BoneDiametersFields = () => (
    <section className={styles.inputGroup}>
      <h3>Diametros óseos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
        <Input
          name="D_bistyloid"
          label="D.Biestiloideo:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="D_humerus"
          label="B.Húmero:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="D_femur"
          label="D.Fémur:"
          required
          type="number"
          placeholder="##"
        />

        <Input
          name="D_humeral"
          label="D.Humeral:"
          required
          type="number"
          placeholder="##"
        />

        <Input
          name="D_femoral"
          label="D.Femoral:"
          required
          type="number"
          placeholder="##"
        />
      </div>
    </section>
  );

  const CircumferencesFields = () => (
    <section className={styles.inputGroup}>
      <h3>Circunferencias</h3>
      <div className="">
        <Input
          name="c_relaxed_arm"
          label="Brazo Relajado:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="c_contracted_arm"
          label="Brazo Contraido:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="c_leg_max"
          label="Pierna Max:"
          required
          type="number"
          placeholder="##"
        />
      </div>
    </section>
  );

  const DistributionFields = () => (
    <section className={styles.inputGroup}>
      <h3>Distribución energética</h3>
      <div className="">
        <Input
          name="kcalCarboHydrates"
          label="Porcentaje para hidratos de carbono:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="kcalLipids"
          label="Porcentaje para lípidos:"
          required
          type="number"
          placeholder="##"
        />
        <Input
          name="kcalProteins"
          label="Porcentaje para proteínas:"
          required
          type="number"
          placeholder="##"
        />
      </div>
    </section>
  );

  const NotesFields = () => (
    <section className={styles.inputGroup}>
      <h3>Notas generales</h3>
      <div className="">
        <br />
        <br />
        <br />
        <Textarea
          rows="5"
          cols="150"
          name="note"
          bordered
          color="success"
          labelPlaceholder="Agregar notas"
        />
      </div>
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

  const fieldGroups = [
    <PersonFields />,
    <ContactFields />,
    <AddressFields />,
    <VitalSignsFields />,
    <PlyometricFields />,
    <CircumferencesFields />,
    <BoneDiametersFields />,
    <DistributionFields />,
    <NotesFields />,
  ];

  return (
    <Layout title={"Consulta"}>
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