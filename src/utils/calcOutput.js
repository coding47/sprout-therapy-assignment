export default (A, B, C, D, E, F, rules) => {
    D = parseFloat(D);
    E = parseInt(E);
    F = parseInt(F);

    const returnH = (A, B, C) => {
        if (A === "true" && B === "true" && C === "false") {
          return rules === 2 ? "T" : "M"; // Custom set of rules overrides return value
        } else if (A === "true" && B === "false" && C === "true" && rules === 2) {
          return "M";
        } else if (A === "true" && B === "true" && C === "true") {
          return "P";
        } else if (A === "false" && B === "true" && C === "true") {
          return "T";
        } else {
          throw new Error("Invalid values");
        }
    }

    const returnK = (D, E, F, H) => {
      if (H === "M") {
        return rules === 2 ? F + D + (D * E / 100) : D + (D * E / 10); // Custom set of rules overrides return value
      } else if (H === "P") {
        return rules === 1 ? 2 * D + (D * E / 100) : D + (D * (E - F) / 25.5); // Custom set of rules overrides return value
      } else if (H === "T") {
        return D - (D * F / 30);
      } else {
        throw new Error('Invalid value of "H"')
      }
    }

    let H;
    let K;
    try {
      H = returnH(A, B, C);
    } catch(error) {
      H = error.message;
    }

    try {
      K = returnK(D, E, F, H);
    } catch(error) {
      K = error.message;
    }

    return { H, K }
}