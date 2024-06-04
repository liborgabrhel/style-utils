import { test } from "node:test"
import assert from "node:assert"
import { applyClasses, combineClasses } from "../src"

test("combineClasses should combine classes into a single string", () => {
  assert.equal(combineClasses("class1", "class2"), "class1 class2")
})

test("combineClasses should filter out empty classes", () => {
  assert.equal(combineClasses("class1", "", "class2"), "class1 class2")
})

test("combineClasses should filter out undefined classes", () => {
  assert.equal(combineClasses("class1", undefined, "class2"), "class1 class2")
})

test("applyClasses should apply classes conditionally", () => {
  assert.equal(applyClasses("class1", "class2").if(true), "class1 class2")
  assert.equal(applyClasses("class1", "class2").if(false), "")
})
