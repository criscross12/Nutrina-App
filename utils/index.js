export const datahelp = (data) => {
  const user_uuid = "";
  const patient_uuid = "";

  const basic_measurements = {
    weight: parseInt(data["weight"]),
    height: parseInt(data["height"]),
    waist: parseInt(data["waist"]),
    hip: parseInt(data["hip"]),
  };
  const body_measurements = {
    fat_percentage: parseInt(data["fat_percentage"]),
    visceral_fat_percentage: parseInt(data["visceral_fat_percentage"]),
    muscle_mass_percentage: parseInt(data["muscle_mass_percentage"]),
    body_age: parseInt(data["body_age"]),
  };
  const vital_signs = {
    capillary_glucose: parseInt(data["capillary_glucose"]),
    heart_rate: parseInt(data["heart_rate"]),
    blood_pressure: parseInt(data["blood_pressure"]),
  };
  const plyometric_measurements = {
    pl_triceps: parseInt(data["pl_triceps"]),
    pl_subscapular: parseInt(data["pl_subscapular"]),
    pl_biceps: parseInt(data["pl_biceps"]),
    pl_iliac_crest: parseInt(data["pl_iliac_crest"]),
    pl_supraspinal: parseInt(data["pl_supraspinal"]),
    pl_abdominal: parseInt(data["pl_abdominal"]),
    pl_thigh: parseInt(data["pl_thigh"]),
    pl_leg: parseInt(data["pl_leg"]),
  };
  const bone_diameters = {
    D_bistyloid: parseInt(data["D_bistyloid"]),
    D_humerus: parseInt(data["D_humerus"]),
    D_femur: parseInt(data["D_femur"]),
  };
  const circumferences = {
    c_relaxed_arm: parseInt(data["c_relaxed_arm"]),
    c_contracted_arm: parseInt(data["c_contracted_arm"]),
    c_leg_max: parseInt(data["c_leg_max"]),
    c_mid_thigh: parseInt(data["c_mid_thigh"]),
  };
  const energy_distribution = {
    kcalCarboHydrates: parseInt(data["kcalCarboHydrates"]),
    kcalLipids: parseInt(data["kcalLipids"]),
    kcalProteins: parseInt(data["kcalProteins"]),
  };

  const note = {
    note: data["note"],
  };

  const dataResponse = {
    user_uuid,
    patient_uuid,
    data_patient,
    basic_measurements,
    body_measurements,
    vital_signs,
    bone_diameters,
    circumferences,
    energy_distribution,
    plyometric_measurements,
    note,
  };
  return dataResponse;
};

export const dataPatient = (data) => {
  const data_patient = {
    name: data["name"],
    first_name: data["first_name"],
    second_name: data["second_name"],
    date_of_birth: data["date_of_birth"],
    email: data["email"],
    ocupation: data["ocupation"],
    phone: data["phone"],
    reason: data["reason"],
    sex: data["sex"],
  };
  return data_patient;
};
