import captainModel from "../Models/captain.model.js";

export const createCaptain = async ({ fullName, email, password, vehicle }) => {
  if (
    !fullName?.firstName ||
    !email ||
    !password ||
    !vehicle?.color ||
    !vehicle?.plate ||
    !vehicle?.capacity ||
    !vehicle?.vehicleType
  ) {
    throw new Error("All fields are required");
  }

  const captain = captainModel.create({
    fullName,
    email,
    password,
    vehicle,
  });

  return captain;
};
