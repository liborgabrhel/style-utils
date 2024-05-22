# @liborgabrhel/style-utils

Utility functions to combine and apply CSS style classes.

## Installation

```bash
npm install @liborgabrhel/style-utils
```

## Usage

```javascript
import styles from "styles.module.css"
import { combineClasses, applyClasses } from "@liborgabrhel/style-utils"

const combinedClasses = combineClasses(styles.class1, styles.class2, styles.class3)
// combinedClasses = 'class1 class2 class3'

const appliedClasses = applyClasses(styles.class1, styles.class2, styles.class3).if(true)
// appliedClasses = 'class1 class2 class3'

const notAppliedClasses = applyClasses(styles.class1, styles.class2, styles.class3).if(false)
// notAppliedClasses = ''
```
