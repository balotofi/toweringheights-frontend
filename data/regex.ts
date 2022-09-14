/* eslint-disable no-useless-escape */
export const NAME_REGEX = /^[A-Za-z\-]+\s[A-Za-z\-]*$/
export const PHONE_REGEX =
	/^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
export const EMAIL_REGEX = /^[A-Za-z0-9_\-\.]{4,}[@][a-z]+[\.][a-z]{2,3}$/

// const EMAIL_REGEX = /^[A-Za-z0-9_\-\.]{4,}[@][a-z]+[\.][a-z]{2,3}$/
// //const EMAIL_REGEX = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
