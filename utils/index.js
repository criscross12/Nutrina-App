export const datahelp = (data) => {
  const user_uuid = "";
  const patient_uuid = "";

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

  const basic_measurements = {
    weight: data["weight"],
    height: data["height"],
    waist: data["waist"],
    hip: data["hip"],
  };
  const body_measurements = {
    fat_percentage: data["fat_percentage"],
    visceral_fat_percentage: data["visceral_fat_percentage"],
    muscle_mass_percentage: data["muscle_mass_percentage"],
    body_age: data["body_age"],
  };
  const vital_signs = {
    capillary_glucose: data["capillary_glucose"],
    heart_rate: data["heart_rate"],
    blood_pressure: data["blood_pressure"],
  };
  const plyometric_measurements = {
    pl_triceps: data["pl_triceps"],
    pl_subscapular: data["pl_subscapular"],
    pl_biceps: data["pl_biceps"],
    pl_iliac_crest: data["pl_iliac_crest"],
    pl_supraspinal: data["pl_supraspinal"],
    pl_abdominal: data["pl_abdominal"],
    pl_thigh: data["pl_thigh"],
    pl_leg: data["pl_leg"],
  };
  const bone_diameters = {
    D_bistyloid: data["D_bistyloid"],
    D_humerus: data["D_humerus"],
    D_femur: data["D_femur"],
  };
  const circumferences = {
    c_relaxed_arm: data["c_relaxed_arm"],
    c_contracted_arm: data["c_contracted_arm"],
    c_leg_max: data["c_leg_max"],
    c_mid_thigh: data["c_mid_thigh"],
  };
  const energy_distribution = {
    kcalCarboHydrates: data["kcalCarboHydrates"],
    kcalLipids: data["kcalLipids"],
    kcalProteins: data["kcalProteins"],
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
  };
  return dataResponse;
};
