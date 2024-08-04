import React, { createContext, useContext, useState, useEffect } from "react";
import { sha3_512 } from "js-sha3";
import Chance from "chance";

import cryptography from "cryptography/Cryptography";

// Create Context
const CryptographyContext = createContext(null);

// Cryptographically Random String Generator
export const randomString = (additionalSalt = "") => {
  // Define the length of the random string
  const randomStringLength = 16; // You can change this value to generate a longer or shorter string

  // Generate a random array of uint8 values
  const randomValues = crypto.getRandomValues(
    new Uint8Array(randomStringLength),
  );

  // Convert random values to hexadecimal string
  const randomHex = Array.from(randomValues)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  // If additional salt is provided, concatenate it with the random string
  const randomString = additionalSalt ? additionalSalt + randomHex : randomHex;

  return randomString;
};

// // Usage:
// const randomString = random('some more salt');
// console.log(randomString);

// CryptographyProvider Component
export const CryptographyProvider = cryptography.CryptographyProvider;

// Custom Hook to use Cryptography
export const useCryptography = () => {
  return useContext(CryptographyContext);
};
