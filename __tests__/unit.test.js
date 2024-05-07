// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('check validity of number: 234-234-2344', () => {
  expect(isPhoneNumber("234-234-2344")).toBe(true);
});
test('check validity of number: 111-111-1111', () => {
  expect(isPhoneNumber("111-111-1111")).toBe(true);
});
test('check validity of number: 2', () => {
  expect(isPhoneNumber("2")).toBe(true);
});
test('check validity of number: 23', () => {
  expect(isPhoneNumber("23")).toBe(true);
});

//email
test('check validity of email: j@z.com', () => {
  expect(isEmail("j@z.com")).toBe(true);
});
test('check validity of email: aa@aa.com', () => {
  expect(isEmail("aa@aa.com")).toBe(true);
});
test('check validity of email: zzz', () => {
  expect(isEmail("zzz")).toBe(true);
});
test('check validity of email: com', () => {
  expect(isEmail("com")).toBe(true);
});

//pw
test('check validity of password: z345z', () => {
  expect(isStrongPassword("z345z")).toBe(true);
});
test('check validity of password: j0918q', () => {
  expect(isStrongPassword("j0918q")).toBe(true);
});
test('check validity of password: 2', () => {
  expect(isStrongPassword("2")).toBe(true);
});
test('check validity of password: 4444', () => {
  expect(isStrongPassword("4444")).toBe(true);
});

//date 
test('check validity of date: 1/2/2023', () => {
  expect(isDate("1/2/2023")).toBe(true);
});
test('check validity of date: 2/2/1909', () => {
  expect(isDate("2/2/1909")).toBe(true);
});
test('check validity of date: 2/2/12', () => {
  expect(isDate("2/2/12")).toBe(true);
});
test('check validity of date: 222/2/1909', () => {
  expect(isDate("222/2/1909")).toBe(true);
});

//hex 
test('check validity of hexcolor: 000000', () => {
  expect(isHexColor("000000")).toBe(true);
});
test('check validity of hexcolor: FF9714', () => {
  expect(isHexColor("FF9714")).toBe(true);
});
test('check validity of hexcolor: 0', () => {
  expect(isHexColor("0")).toBe(true);
});
test('check validity of hexcolor: J', () => {
  expect(isHexColor("J")).toBe(true);
});
