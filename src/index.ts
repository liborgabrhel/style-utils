/**
 * Combines classes into a single string
 * @param classes
 *
 * @example
 * combineClasses("class1", "class2")
 */
export function combineClasses(...classes: string[]) {
  return classes.filter((value) => value !== "").join(" ")
}

/**
 * Applies classes conditionally
 * @param classes
 *
 * @example
 * applyClasses("class1", "class2").if(condition)
 */
export function applyClasses(...classes: string[]) {
  return {
    if: (condition: boolean) => {
      return condition ? combineClasses(...classes) : ""
    },
  }
}
