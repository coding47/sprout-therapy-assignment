import calcOutput from '../utils/calcOutput';

const D = 0.5;
const E = 10;
const F = 5;

it('Returns correct values for case 1', () => {
    const expression = D + (D * E / 10);
    const predefined = "M"

    const A = "true";
    const B = "true";
    const C = "false";
    const result = calcOutput(A, B, C, D, E, F);
    expect(result).toEqual({"H": predefined, "K": expression})
});

it('Returns correct values for case 2', () => {
    const expression = D + (D * (E - F) / 25.5);
    const predefined = "P";

    const A = "true";
    const B = "true";
    const C = "true";
    const result = calcOutput(A, B, C, D, E, F);
    expect(result).toEqual({"H": predefined, "K": expression})
});

it('Returns correct values for case 3', () => {
    const expression = D - (D * F / 30);
    const predefined = "T";

    const A = "false";
    const B = "true";
    const C = "true";
    const result = calcOutput(A, B, C, D, E, F);
    expect(result).toEqual({"H": predefined, "K": expression})
});

it('Returns correct values with custom set of rules 1', () => {
    const expression = 2 * D + (D * E / 100);
    const predefined = "P";

    const A = "true";
    const B = "true";
    const C = "true";
    const rules = 1;
    const result = calcOutput(A, B, C, D, E, F, rules);
    expect(result).toEqual({"H": predefined, "K": expression})
});

it('Returns correct values with custom set of rules 2 end case 1', () => {
    const predefined = "T";

    const A = "true";
    const B = "true";
    const C = "false";
    const rules = 2;
    const result = calcOutput(A, B, C, D, E, F, rules);
    expect(result.H).toEqual(predefined)
});

it('Returns correct values with custom set of rules 2 end case 2', () => {
    const expression = F + D + (D * E / 100);
    const predefined = "M";

    const A = "true";
    const B = "false";
    const C = "true";
    const rules = 2;
    const result = calcOutput(A, B, C, D, E, F, rules);
    expect(result).toEqual({"H": predefined, "K": expression})
});

it('Handle error with invalid data', () => {
    const A = "false";
    const B = "0";
    const C = "true";
    const result = calcOutput(A, B, C, D, E, F);
    expect(result.H).toContain("Invalid values");
});