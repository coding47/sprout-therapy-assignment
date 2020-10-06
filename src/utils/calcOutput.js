export default (A, B, C, D, E, F) => {
    const returnH = (A, B, C) => {
        if (A === "true" && B === "true" && C === "false") {
          return "M";
        } else if (A === "true" && B === "true" && C === "true") {
          return "P";
        } else if (A === "false" && B === "true" && C === "false") {
          return "T"
        } else {
          throw new Error("Invalid values");
        }
    }

    const returnK = (D, E, F, H) => {
      if (H === "M") {
        return D + (D * E / 10);
      } else if (H === "P") {
        return D + (D * (E - F) / 25.5)
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